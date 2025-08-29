import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitScroll]",
})
export class ScrollDirective extends UIkitDirective<UIkit.UIkitScrollOptions, UIkit.UIkitScrollElement> {
  @Input("uikitScroll")
  public override options: UIkit.UIkitScrollOptions | "" | null | undefined;

  protected override parseOptions(options: UIkit.UIkitScrollOptions): (UIkit.UIkitScrollOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitScrollOptions | undefined, _isInitial?: boolean): UIkit.UIkitScrollElement {
    return UIkit.scroll(element, options);
  }
}
