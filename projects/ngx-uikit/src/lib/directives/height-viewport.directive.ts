import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitHeightViewport]",
})
export class HeightViewportDirective extends UIkitDirective<UIkit.UIkitHeightViewportOptions, UIkit.UIkitElementBase> {
  @Input("uikitHeightViewport")
  public override options: UIkit.UIkitHeightViewportOptions | "" | null | undefined;

  protected override parseOptions(options: UIkit.UIkitHeightViewportOptions): (UIkit.UIkitHeightViewportOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitHeightViewportOptions | undefined, _isInitial?: boolean): UIkit.UIkitElementBase {
    return UIkit.heightViewport(element, options);
  }
}
