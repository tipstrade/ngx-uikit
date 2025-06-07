import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitNavbar]",
})
export class NavbarDirective extends UIkitDirective<UIkitNS.UIkitNavbarOptions, any> {
  @Input("uikitNavbar")
  public override options: UIkitNS.UIkitNavbarOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitNavbarOptions | null | undefined): any {
    return UIkit.navbar(element, options ?? undefined);
  }
}
