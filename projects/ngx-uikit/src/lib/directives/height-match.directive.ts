import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitHeightMatch]",
})
export class HeightMatchDirective extends UIkitDirective<UIkitNS.UIkitHeightMatchOptions | string, any> {
  @Input("uikitHeightMatch")
  public override options: UIkitNS.UIkitHeightMatchOptions | string | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitHeightMatchOptions | string): (UIkitNS.UIkitHeightMatchOptions & object) | undefined {
    if (typeof options === "string") {
      return { target: options };
    }

    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkitNS.UIkitHeightMatchOptions | undefined, _isInitial?: boolean): any {
    return UIkit.heightMatch(element, options);
  }
}
