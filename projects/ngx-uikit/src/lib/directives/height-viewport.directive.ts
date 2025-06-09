import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitHeightViewport]",
})
export class HeightViewportDirective extends UIkitDirective<UIkitNS.UIkitHeightViewportOptions, any> {
  @Input("uikitHeightViewport")
  public override options: UIkitNS.UIkitHeightViewportOptions | "" | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitHeightViewportOptions): (UIkitNS.UIkitHeightViewportOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkitNS.UIkitHeightViewportOptions | undefined, _isInitial?: boolean): any {
    return UIkit.heightViewport(element, options);
  }
}
