import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitHeightViewport]",
})
export class HeightViewportDirective extends UIkitDirective<UIkit.UIkitHeightViewportOptions, any> {
  @Input("uikitHeightViewport")
  public override options: UIkit.UIkitHeightViewportOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitHeightViewportOptions | null | undefined): any {
    return UIkit.heightViewport(element, options ?? undefined);
  }
}
