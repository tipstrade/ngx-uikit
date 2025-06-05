import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSticky]",
})
export class StickyDirective extends UIkitDirective<UIkit.UIkitStickyOptions, any> {
  @Input("uikitSticky")
  public override options: UIkit.UIkitStickyOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitStickyOptions | null | undefined): any {
    return UIkit.sticky(element, options ?? undefined);
  }
}
