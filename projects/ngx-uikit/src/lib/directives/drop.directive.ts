import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitDrop]",
})
export class DropDirective extends UIkitDirective<UIkitNS.UIkitDropOptions | string, UIkitNS.UIkitDropElement> {
  @Input("uikitDrop")
  public override options: UIkitNS.UIkitDropOptions | string | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitDropOptions | string): (UIkitNS.UIkitDropOptions & object) | undefined {
    if (typeof options === "string") {
      return { pos: options };
    }

    return options;
  }

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitDropOptions | undefined, _isInitial?: boolean): UIkitNS.UIkitDropElement {
    return UIkit.drop(element, options);
  }
}
