import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitLightbox]",
})
export class LightboxDirective extends UIkitDirective<UIkitNS.UIkitLightboxOptions, UIkitNS.UIkitLightboxElement> {
  @Input("uikitLightbox")
  public override options: UIkitNS.UIkitLightboxOptions | "" | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitLightboxOptions): (UIkitNS.UIkitLightboxOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkitNS.UIkitLightboxOptions | undefined, _isInitial?: boolean): UIkitNS.UIkitLightboxElement {
    return UIkit.lightbox(element, options);
  }
}
