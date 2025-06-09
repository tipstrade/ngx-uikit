import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitNavbar]",
})
export class NavbarDirective extends UIkitDirective<UIkitNS.UIkitNavbarOptions, any> {
  @Input("uikitNavbar")
  public override options: UIkitNS.UIkitNavbarOptions | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitNavbarOptions): (UIkitNS.UIkitNavbarOptions & object) | undefined {
    return options;
  }

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitNavbarOptions | undefined, _isInitial?: boolean): any {
    return UIkit.navbar(element, options);
  }
}
