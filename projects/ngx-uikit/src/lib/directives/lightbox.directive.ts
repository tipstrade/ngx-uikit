import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitLightbox]",
})
export class LightboxDirective extends UIkitDirective<UIkit.UIkitLightboxOptions, UIkit.UIkitLightboxElement> {
  @Input("uikitLightbox")
  public override options: UIkit.UIkitLightboxOptions | "" | null | undefined;

  protected override parseOptions(options: UIkit.UIkitLightboxOptions): (UIkit.UIkitLightboxOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitLightboxOptions | undefined, _isInitial?: boolean): UIkit.UIkitLightboxElement {
    return UIkit.lightbox(element, options);
  }
}
