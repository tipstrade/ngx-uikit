import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitFilter]",
})
export class FilterDirective extends UIkitDirective<UIkitNS.UIkitFilterOptions | string, any> {
  @Input("uikitFilter")
  public override options: UIkitNS.UIkitFilterOptions | string | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitFilterOptions | string | null | undefined): any {
    if (typeof options === "string") {
      options = { target: options };
    }

    return UIkit.filter(element, options ?? undefined);
  }
}
