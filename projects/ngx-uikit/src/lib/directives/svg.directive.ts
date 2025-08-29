import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSvg]",
})
export class SvgDirective extends UIkitDirective<UIkit.UIkitSvgOptions, UIkit.UIkitSvgElement> {
  @Input("uikitSvg")
  public override options: UIkit.UIkitSvgOptions | "" | null | undefined;

  protected override parseOptions(options: UIkit.UIkitSvgOptions): (UIkit.UIkitSvgOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitSvgOptions | undefined, _isInitial?: boolean): UIkit.UIkitSvgElement {
    return UIkit.svg(element, options);
  }
}
