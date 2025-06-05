import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitNav]",
})
export class NavDirective extends UIkitDirective<UIkit.UIkitNavOptions, UIkit.UIkitNavElement> {
  @Input("uikitNav")
  public override options: UIkit.UIkitNavOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitNavOptions | null | undefined): UIkit.UIkitNavElement {
    return UIkit.nav(element, options ?? undefined);
  }
}
