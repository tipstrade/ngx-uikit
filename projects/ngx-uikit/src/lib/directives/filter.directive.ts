import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitFilter]",
})
export class FilterDirective extends UIkitDirective<UIkit.UIkitFilterOptions | string, any> {
  @Input("uikitFilter")
  public override options: UIkit.UIkitFilterOptions | string | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitFilterOptions | string | null | undefined): any {
    if (typeof options === "string") {
      options = { target: options };
    }

    return UIkit.filter(element, options ?? undefined);
  }
}
