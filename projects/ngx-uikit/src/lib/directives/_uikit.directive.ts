import { AfterViewInit, Directive, ElementRef, inject, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
import { uikitDestroy } from "../helpers";

@Directive()
export abstract class UIkitDirective<TOptions, TElement> implements AfterViewInit, OnChanges, OnDestroy {
  // ========================
  // Injected
  // ========================

  protected readonly el: ElementRef<HTMLElement> = inject(ElementRef);

  // ========================
  // Properties
  // ========================

  private _ref: TElement | null | undefined;

  protected set ref(value: TElement | null | undefined) {
    // Ensure that the old ref is destroyed
    if (this._ref) {
      uikitDestroy(this._ref);
    }

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
    this.ref = this.hookComponent(this.options, true);

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
      this.ref = this.hookComponent(this.options);
    }
  }

  ngOnDestroy(): void {
    if (this.onDestroy) {
      this.onDestroy();
    }
    uikitDestroy(this.ref);
  }

  // ========================
  // Abstract methods
  // ========================

  protected afterViewInit?(): void;

  protected onChanges?(changes: SimpleChanges): void;

  protected onDestroy?(): void;

  protected abstract hookComponent(options: TOptions | null | undefined, isInitial?: boolean): TElement;
}
