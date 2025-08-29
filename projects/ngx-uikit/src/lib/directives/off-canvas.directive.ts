import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitOffCanvas]",
})
export class OffCanvasDirective extends UIkitDirective<UIkit.UIkitOffcanvasOptions, UIkit.UIkitOffcanvasElement> {
  @Input("uikitOffCanvas")
  public override options: UIkit.UIkitOffcanvasOptions | null | undefined;

  protected override parseOptions(options: UIkit.UIkitOffcanvasOptions): (UIkit.UIkitOffcanvasOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitOffcanvasOptions | undefined, _isInitial?: boolean): UIkit.UIkitOffcanvasElement {
    return UIkit.offcanvas(element, options);
  }
}
