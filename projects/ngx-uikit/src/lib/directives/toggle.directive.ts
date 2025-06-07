import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitToggle]",
})
export class ToggleDirective extends UIkitDirective<UIkitNS.UIkitToggleOptions | string, UIkitNS.UIkitToggleElement> {
  @Input("uikitToggle")
  public override options: string | UIkitNS.UIkitToggleOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: string | UIkitNS.UIkitToggleOptions | null | undefined): UIkitNS.UIkitToggleElement {
    if (typeof options === "string") {
      options = { connect: options } as any as UIkitNS.UIkitToggleOptions;
    }

    return UIkit.toggle(element, options ?? undefined);
  }
}
