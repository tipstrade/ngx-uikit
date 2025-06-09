import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitDropdown]",
})
export class DropdownDirective extends UIkitDirective<UIkitNS.UIkitDropdownOptions | string, UIkitNS.UIkitDropdownElement> {
  @Input("uikitDropdown")
  public override options: UIkitNS.UIkitDropdownOptions | string | null | undefined;

  protected override parseOptions(options: string | UIkitNS.UIkitDropdownOptions): (UIkitNS.UIkitDropdownOptions & object) | undefined {
    if (typeof options === "string") {
      return { pos: options };
    }

    return options;
  }

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitDropdownOptions | undefined, _isInitial?: boolean): UIkitNS.UIkitDropdownElement {
    return UIkit.dropdown(element, options);
  }
}
