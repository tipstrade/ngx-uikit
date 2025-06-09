import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitHeightMatch]",
})
export class HeightMatchDirective extends UIkitDirective<UIkitNS.UIkitHeightMatchOptions, any> {
  @Input("uikitHeightMatch")
  public override options: UIkitNS.UIkitHeightMatchOptions | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitHeightMatchOptions): (UIkitNS.UIkitHeightMatchOptions & object) | undefined {
    return options;
  }

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitHeightMatchOptions | undefined, _isInitial?: boolean): any {
    return UIkit.heightMatch(element, options);
  }
}
