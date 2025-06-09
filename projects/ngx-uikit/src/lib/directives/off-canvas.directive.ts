import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitOffCanvas]",
})
export class OffCanvasDirective extends UIkitDirective<UIkitNS.UIkitOffcanvasOptions | string, UIkitNS.UIkitOffcanvasElement> {
  @Input("uikitOffCanvas")
  public override options: UIkitNS.UIkitOffcanvasOptions | string | null | undefined;

  protected override parseOptions(options: string | UIkitNS.UIkitOffcanvasOptions): (UIkitNS.UIkitOffcanvasOptions & object) | undefined {
    if (typeof options === "string") {
      return { mode: options };
    }

    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkitNS.UIkitOffcanvasOptions | undefined, _isInitial?: boolean): UIkitNS.UIkitOffcanvasElement {
    return UIkit.offcanvas(element, options);
  }
}
