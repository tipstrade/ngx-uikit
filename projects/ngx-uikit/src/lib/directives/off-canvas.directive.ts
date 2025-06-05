import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitOffCanvas]",
})
export class OffCanvasDirective extends UIkitDirective<UIkit.UIkitOffcanvasOptions | string, UIkit.UIkitOffcanvasElement> {
  @Input("uikitOffCanvas")
  public override options: UIkit.UIkitOffcanvasOptions | string | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitOffcanvasOptions | string | null | undefined): UIkit.UIkitOffcanvasElement {
    if (typeof options === "string") {
      options = { mode: options };
    }

    return UIkit.offcanvas(element, options ?? undefined);
  }
}
