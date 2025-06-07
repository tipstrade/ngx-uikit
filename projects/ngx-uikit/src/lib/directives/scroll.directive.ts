import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitScroll]",
})
export class ScrollDirective extends UIkitDirective<UIkitNS.UIkitScrollOptions, UIkitNS.UIkitScrollElement> {
  @Input("uikitScroll")
  public override options: UIkitNS.UIkitScrollOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitScrollOptions | null | undefined): UIkitNS.UIkitScrollElement {
    return UIkit.scroll(element, options ?? undefined);
  }
}
