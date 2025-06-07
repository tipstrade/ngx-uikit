import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSwitcher]",
})
export class SwitcherDirective extends UIkitDirective<UIkitNS.UIkitSwitcherOptions | string, UIkitNS.UIkitSwitcherElement> {
  @Input("uikitSwitcher")
  public options: string | UIkitNS.UIkitSwitcherOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitSwitcherOptions | string | null | undefined): UIkitNS.UIkitSwitcherElement {
    if (typeof options === "string") {
      options = { connect: options };
    }

    return UIkit.switcher(element, options ?? undefined);
  }
}
