import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitFilter]",
})
export class FilterDirective extends UIkitDirective<UIkitNS.UIkitFilterOptions | string, any> {
  @Input("uikitFilter")
  public override options: UIkitNS.UIkitFilterOptions | string | null | undefined;

  protected override parseOptions(options: string | UIkitNS.UIkitFilterOptions): (UIkitNS.UIkitFilterOptions & object) | undefined {
    if (typeof options === "string") {
      return { target: options };
    }

    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkitNS.UIkitFilterOptions | undefined, _isInitial?: boolean): any {
    return UIkit.filter(element, options);
  }
}
