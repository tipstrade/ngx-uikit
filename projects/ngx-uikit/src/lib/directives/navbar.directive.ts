import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitNavbar]",
})
export class NavbarDirective extends UIkitDirective<UIkit.UIkitNavbarOptions, any> {
  @Input("uikitNavbar")
  public override options: UIkit.UIkitNavbarOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitNavbarOptions | null | undefined): any {
    return UIkit.navbar(element, options ?? undefined);
  }
}
