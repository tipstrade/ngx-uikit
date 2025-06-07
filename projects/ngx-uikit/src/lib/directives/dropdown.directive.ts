import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitDropdown]",
})
export class DropdownDirective extends UIkitDirective<UIkitNS.UIkitDropdownOptions | string, UIkitNS.UIkitDropdownElement> {
  @Input("uikitDropdown")
  public override options: UIkitNS.UIkitDropdownOptions | string | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitDropdownOptions | string | null | undefined): UIkitNS.UIkitDropdownElement {
    if (typeof options === "string") {
      options = { pos: options || undefined };
    }

    return UIkit.dropdown(element, options ?? undefined);
  }
}
