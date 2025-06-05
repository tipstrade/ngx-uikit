import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitDropdown]",
})
export class DropdownDirective extends UIkitDirective<UIkit.UIkitDropdownOptions | string, UIkit.UIkitDropdownElement> {
  @Input("uikitDropdown")
  public override options: UIkit.UIkitDropdownOptions | string | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitDropdownOptions | string | null | undefined): UIkit.UIkitDropdownElement {
    if (typeof options === "string") {
      options = { pos: options || undefined };
    }

    return UIkit.dropdown(element, options ?? undefined);
  }
}
