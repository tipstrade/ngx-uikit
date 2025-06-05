import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitHeightMatch]",
})
export class HeightMatchDirective extends UIkitDirective<UIkit.UIkitHeightMatchOptions, unknown> {
  @Input("uikitHeightMatch")
  public override options: UIkit.UIkitHeightMatchOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitHeightMatchOptions | null | undefined): unknown {
    return UIkit.heightMatch(element, options ?? undefined);
  }
}
