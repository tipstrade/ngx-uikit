import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitIcon]",
})
export class IconDirective extends UIkitDirective<UIkit.UIkitIconOptions | string, UIkit.UIkitSvgElement> {
  @Input("uikitIcon")
  public override options: UIkit.UIkitIconOptions | string | null | undefined;

  protected override parseOptions(options: string | UIkit.UIkitIconOptions): (UIkit.UIkitIconOptions & object) | undefined {
    if (typeof options === "string") {
      return { icon: options };
    }

    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitIconOptions | undefined, _isInitial?: boolean): UIkit.UIkitSvgElement {
    return UIkit.icon(element, options);
  }
}
