import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitToggle]",
})
export class ToggleDirective extends UIkitDirective<UIkitNS.UIkitToggleOptions | string, UIkitNS.UIkitToggleElement> {
  @Input("uikitToggle")
  public override options: string | UIkitNS.UIkitToggleOptions | null | undefined;

  protected override parseOptions(options: string | UIkitNS.UIkitToggleOptions): (UIkitNS.UIkitToggleOptions & object) | undefined {
    if (typeof options === "string") {
      return { target: options };
    }

    return options;
  }

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitToggleOptions | undefined, _isInitial?: boolean): UIkitNS.UIkitToggleElement {
    return UIkit.toggle(element, options);
  }
}
