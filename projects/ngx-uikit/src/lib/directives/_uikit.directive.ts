import { AfterViewInit, Directive, ElementRef, inject, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
import { uikitDestroy } from "../helpers";
import { UikitConfigService } from "../uikit-config";

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
      this.config.log("Destroy ref", this.id);
      uikitDestroy(this._ref);
    }

    this.config.log("Set ref", this.id, this.ref ? "" : "initial");
    this._ref = value;
  }

  public get ref(): TElement | null | undefined {
    return this._ref;
  }

  public abstract options: TOptions | null | undefined;

  // ========================
  // Lifecycle
  // ========================

  ngAfterViewInit(): void {
    if (!this.ref) {
      this.ref = this.hookComponent(this.el.nativeElement, this.options, true);
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
      this.ref = this.hookComponent(this.el.nativeElement, this.options);
    }
  }

  ngOnDestroy(): void {
    if (this.onDestroy) {
      this.onDestroy();
    }

    this.config.log("Destroyed ref", this.id, "final");
    uikitDestroy(this.ref);
  }

  // ========================
  // Abstract methods
  // ========================

  protected afterViewInit?(): void;

  protected createComponent?(element: HTMLElement, options: TOptions | null | undefined, isInitial?: boolean): TElement;

  protected onChanges?(changes: SimpleChanges): void;

  protected onDestroy?(): void;

  protected abstract hookComponent(element: HTMLElement, options: TOptions | null | undefined, isInitial?: boolean): TElement;
}
