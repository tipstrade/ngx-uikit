import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSwitcher]",
})
export class SwitcherDirective extends UIkitDirective<UIkitNS.UIkitSwitcherOptions | string, UIkitNS.UIkitSwitcherElement> {
  @Input("uikitSwitcher")
  public options: string | UIkitNS.UIkitSwitcherOptions | "" | null | undefined;

  protected override parseOptions(options: string | UIkitNS.UIkitSwitcherOptions): (UIkitNS.UIkitSwitcherOptions & object) | undefined {
    if (typeof options === "string") {
      return { connect: options };
    }

    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkitNS.UIkitSwitcherOptions | undefined, _isInitial?: boolean): UIkitNS.UIkitSwitcherElement {
    return UIkit.switcher(element, options);
  }
}
