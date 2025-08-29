import { Directive, inject, Input, Renderer2 } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSlidenav]",
})
export class SlidenavDirective extends UIkitDirective<{ direction: "next" | "previous" } | "next" | "previous", UIkit.UIkitElementBase> {
  private readonly r2 = inject(Renderer2);

  @Input("uikitSlidenav")
  public override options: "" | "next" | "previous" | { direction: "next" | "previous" } | null | undefined;

  protected override createComponent(element: HTMLElement, options: ({ direction: "next" | "previous" } & object) | undefined, _isInitial?: boolean): UIkit.UIkitElementBase {
    if (options?.direction === "previous") {
      return (UIkit as any as { slidenavPrevious: (el: HTMLElement) => UIkit.UIkitElementBase }).slidenavPrevious(element);
    } else {
      return (UIkit as any as { slidenavNext: (el: HTMLElement) => UIkit.UIkitElementBase }).slidenavNext(element);
    }
  }

  protected override parseOptions(options: "next" | "previous" | { direction: "next" | "previous" }): ({ direction: "next" | "previous" } & object) | undefined {
    if (typeof options === "string") {
      options = { direction: options };
    };

    // Hacky as this is used by both slider and slidehow
    this.r2.setAttribute(this.el.nativeElement, "uk-slider-item", options?.direction ?? "next");
    this.r2.setAttribute(this.el.nativeElement, "uk-slideshow-item", options?.direction ?? "next");

    return options;
  }

  protected override onDestroy(): void {
    this.r2.removeAttribute(this.el.nativeElement, "uk-slider-item");
    this.r2.removeAttribute(this.el.nativeElement, "uk-slideshow-item");
  }
}
