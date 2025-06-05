import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitToggle]",
})
export class ToggleDirective extends UIkitDirective<UIkit.UIkitToggleOptions | string, UIkit.UIkitToggleElement> {
  @Input("uikitToggle")
  public override options: string | UIkit.UIkitToggleOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: string | UIkit.UIkitToggleOptions | null | undefined): UIkit.UIkitToggleElement {
    if (typeof options === "string") {
      options = { connect: options } as any as UIkit.UIkitToggleOptions;
    }

    return UIkit.toggle(element, options ?? undefined);
  }
}
