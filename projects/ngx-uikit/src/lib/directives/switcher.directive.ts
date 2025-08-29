import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSwitcher]",
})
export class SwitcherDirective extends UIkitDirective<UIkit.UIkitSwitcherOptions | string, UIkit.UIkitSwitcherElement> {
  @Input("uikitSwitcher")
  public options: string | UIkit.UIkitSwitcherOptions | "" | null | undefined;

  protected override parseOptions(options: string | UIkit.UIkitSwitcherOptions): (UIkit.UIkitSwitcherOptions & object) | undefined {
    if (typeof options === "string") {
      return { connect: options };
    }

    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitSwitcherOptions | undefined, _isInitial?: boolean): UIkit.UIkitSwitcherElement {
    return UIkit.switcher(element, options);
  }
}
