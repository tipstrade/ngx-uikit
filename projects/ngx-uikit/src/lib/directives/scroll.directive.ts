import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitScroll]",
})
export class ScrollDirective extends UIkitDirective<UIkitNS.UIkitScrollOptions, UIkitNS.UIkitScrollElement> {
  @Input("uikitScroll")
  public override options: UIkitNS.UIkitScrollOptions | "" | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitScrollOptions): (UIkitNS.UIkitScrollOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkitNS.UIkitScrollOptions | undefined, _isInitial?: boolean): UIkitNS.UIkitScrollElement {
    return UIkit.scroll(element, options);
  }
}
