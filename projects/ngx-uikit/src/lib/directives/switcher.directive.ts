import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSwitcher]",
})
export class SwitcherDirective extends UIkitDirective<UIkit.UIkitSwitcherOptions | string, UIkit.UIkitSwitcherElement> {
  @Input("uikitSwitcher")
  public options: string | UIkit.UIkitSwitcherOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitSwitcherOptions | string | null | undefined): UIkit.UIkitSwitcherElement {
    if (typeof options === "string") {
      options = { connect: options };
    }

    return UIkit.switcher(element, options ?? undefined);
  }
}
