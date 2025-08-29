import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitNavbar]",
})
export class NavbarDirective extends UIkitDirective<UIkit.UIkitNavbarOptions, UIkit.UIkitElementBase> {
  @Input("uikitNavbar")
  public override options: UIkit.UIkitNavbarOptions | "" | null | undefined;

  protected override parseOptions(options: UIkit.UIkitNavbarOptions): (UIkit.UIkitNavbarOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitNavbarOptions | undefined, _isInitial?: boolean): UIkit.UIkitElementBase {
    return UIkit.navbar(element, options);
  }
}
