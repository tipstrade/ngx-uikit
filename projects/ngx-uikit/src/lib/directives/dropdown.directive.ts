import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitDropdown]",
})
export class DropdownDirective extends UIkitDirective<UIkit.UIkitDropdownOptions, UIkit.UIkitDropdownElement> {
  @Input("uikitDropdown")
  public override options: UIkit.UIkitDropdownOptions | null | undefined;

  protected override parseOptions(options: UIkit.UIkitDropdownOptions): (UIkit.UIkitDropdownOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitDropdownOptions | undefined, _isInitial?: boolean): UIkit.UIkitDropdownElement {
    return UIkit.dropdown(element, options);
  }
}
