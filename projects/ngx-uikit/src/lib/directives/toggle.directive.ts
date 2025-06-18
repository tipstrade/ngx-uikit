import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

type UIkitElement = object | HTMLElement | string;

@Directive({
  selector: "[uikitToggle]",
})
export class ToggleDirective extends UIkitDirective<UIkitNS.UIkitToggleOptions | UIkitElement, UIkitNS.UIkitToggleElement> {
  @Input("uikitToggle")
  public override options: string | UIkitNS.UIkitToggleOptions | UIkitElement | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitToggleOptions | UIkitElement): (UIkitNS.UIkitToggleOptions & object) | undefined {
    if (typeof options === "string") {
      return { target: options };
    } else if (options instanceof HTMLElement) {
      return { target: options } as any as UIkitNS.UIkitToggleOptions;
    }

    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkitNS.UIkitToggleOptions | undefined, _isInitial?: boolean): UIkitNS.UIkitToggleElement {
    return UIkit.toggle(element, options);
  }
}
