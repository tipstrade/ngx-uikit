import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSticky]",
})
export class StickyDirective extends UIkitDirective<UIkitNS.UIkitStickyOptions, any> {
  @Input("uikitSticky")
  public override options: UIkitNS.UIkitStickyOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitStickyOptions | null | undefined): any {
    return UIkit.sticky(element, options ?? undefined);
  }
}
