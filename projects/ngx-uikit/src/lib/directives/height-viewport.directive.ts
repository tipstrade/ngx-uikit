import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitHeightViewport]",
})
export class HeightViewportDirective extends UIkitDirective<UIkitNS.UIkitHeightViewportOptions, any> {
  @Input("uikitHeightViewport")
  public override options: UIkitNS.UIkitHeightViewportOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitHeightViewportOptions | null | undefined): any {
    return UIkit.heightViewport(element, options ?? undefined);
  }
}
