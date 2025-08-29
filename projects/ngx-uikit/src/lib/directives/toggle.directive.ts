import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

type UIkitElement = object | HTMLElement | string;

@Directive({
  selector: "[uikitToggle]",
})
export class ToggleDirective extends UIkitDirective<UIkit.UIkitToggleOptions | UIkitElement, UIkit.UIkitToggleElement> {
  @Input("uikitToggle")
  public override options: string | UIkit.UIkitToggleOptions | UIkitElement | null | undefined;

  protected override parseOptions(options: UIkit.UIkitToggleOptions | UIkitElement): (UIkit.UIkitToggleOptions & object) | undefined {
    if (typeof options === "string") {
      return { target: options };
    } else if (options instanceof HTMLElement) {
      return { target: options };
    }

    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitToggleOptions | undefined, _isInitial?: boolean): UIkit.UIkitToggleElement {
    return UIkit.toggle(element, options);
  }
}
