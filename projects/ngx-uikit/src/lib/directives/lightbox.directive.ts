import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitLightbox]",
})
export class LightboxDirective extends UIkitDirective<UIkit.UIkitLightboxOptions, UIkit.UIkitLightboxElement> {
  @Input("uikitLightbox")
  public override options: UIkit.UIkitLightboxOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitLightboxOptions | null | undefined): UIkit.UIkitLightboxElement {
    return UIkit.lightbox(element, options ?? undefined);
  }
}
