import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitOffCanvas]",
})
export class OffCanvasDirective extends UIkitDirective<UIkitNS.UIkitOffcanvasOptions | string, UIkitNS.UIkitOffcanvasElement> {
  @Input("uikitOffCanvas")
  public override options: UIkitNS.UIkitOffcanvasOptions | string | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitOffcanvasOptions | string | null | undefined): UIkitNS.UIkitOffcanvasElement {
    if (typeof options === "string") {
      options = { mode: options };
    }

    return UIkit.offcanvas(element, options ?? undefined);
  }
}
