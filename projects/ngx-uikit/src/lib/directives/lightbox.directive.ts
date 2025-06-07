import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitLightbox]",
})
export class LightboxDirective extends UIkitDirective<UIkitNS.UIkitLightboxOptions, UIkitNS.UIkitLightboxElement> {
  @Input("uikitLightbox")
  public override options: UIkitNS.UIkitLightboxOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitLightboxOptions | null | undefined): UIkitNS.UIkitLightboxElement {
    return UIkit.lightbox(element, options ?? undefined);
  }
}
