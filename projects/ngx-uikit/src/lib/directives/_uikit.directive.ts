import { AfterViewInit, Directive, ElementRef, inject, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
import { uikitDestroy } from "../helpers";
import { UikitConfigService } from "../uikit-config-service";

@Directive()
export abstract class UIkitDirective<TOptions, TElement> implements AfterViewInit, OnChanges, OnDestroy {
  // ========================
  // Injected
  // ========================

  protected readonly el: ElementRef<HTMLElement> = inject(ElementRef);

  protected readonly config = inject(UikitConfigService);

  // ========================
  // Properties
  // ========================

  private readonly id = this.config.getId();

  private _ref: TElement | null | undefined;

  protected set ref(value: TElement | null | undefined) {
    // Ensure that the old ref is destroyed
    if (this._ref) {
      this.config.log("Destroy ref", this.id, this.ref);
      uikitDestroy(this._ref);
    }

    this.config.log("Set ref", this.id, value, this.ref ? "" : "initial");
    this._ref = value;
  }

  public get ref(): TElement | null | undefined {
    return this._ref;
  }

  public abstract options: TOptions | "" | null | undefined;

  // ========================
  // Lifecycle
  // ========================

  ngAfterViewInit(): void {
    if (!this.ref) {
      this.ref = this.hookComponent(this.el.nativeElement, this.getOptions(), true);
    }

    if (this.afterViewInit) {
      this.afterViewInit();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.onChanges) {
      this.onChanges(changes);

      return;
    }

    if ("options" in changes) {
      this.ref = this.hookComponent(this.el.nativeElement, this.getOptions());
    }
  }

  ngOnDestroy(): void {
    if (this.onDestroy) {
      this.onDestroy();
    }

    this.config.log("Destroyed ref", this.id, this.ref, "final");
    uikitDestroy(this.ref);
  }

  // ========================
  // Methods
  // ========================

  public getOptions(): (TOptions & object) | undefined {
    const { options } = this;

    if (options === "") {
      return undefined;
    }

    return options == null ? undefined : this.parseOptions(options);
  }

  // ========================
  // Abstract methods
  // ========================

  protected afterViewInit?(): void;

  protected abstract hookComponent(element: HTMLElement, options: (TOptions & object) | undefined, _isInitial?: boolean): TElement;

  protected onChanges?(changes: SimpleChanges): void;

  protected onDestroy?(): void;

  protected abstract parseOptions(options: TOptions): (TOptions & object) | undefined;
}
