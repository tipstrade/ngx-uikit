import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitFilter]",
})
export class FilterDirective extends UIkitDirective<UIkit.UIkitFilterOptions | string, UIkit.UIkitElementBase> {
  @Input("uikitFilter")
  public override options: UIkit.UIkitFilterOptions | string | null | undefined;

  protected override parseOptions(options: string | UIkit.UIkitFilterOptions): (UIkit.UIkitFilterOptions & object) | undefined {
    if (typeof options === "string") {
      return { target: options };
    }

    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitFilterOptions | undefined, _isInitial?: boolean): UIkit.UIkitElementBase {
    return UIkit.filter(element, options);
  }
}
