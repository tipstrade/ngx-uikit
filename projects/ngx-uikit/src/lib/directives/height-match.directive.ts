import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitHeightMatch]",
})
export class HeightMatchDirective extends UIkitDirective<UIkit.UIkitHeightMatchOptions | string, UIkit.UIkitElementBase> {
  @Input("uikitHeightMatch")
  public override options: UIkit.UIkitHeightMatchOptions | string | null | undefined;

  protected override parseOptions(options: UIkit.UIkitHeightMatchOptions | string): (UIkit.UIkitHeightMatchOptions & object) | undefined {
    if (typeof options === "string") {
      return { target: options };
    }

    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitHeightMatchOptions | undefined, _isInitial?: boolean): UIkit.UIkitElementBase {
    return UIkit.heightMatch(element, options);
  }
}
