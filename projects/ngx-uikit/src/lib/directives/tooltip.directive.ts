import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitTooltip]",
})
export class TooltipDirective extends UIkitDirective<UIkit.UIkitTooltipOptions | string, UIkit.UIkitTooltipElement> {
  @Input("uikitTooltip")
  public override options: UIkit.UIkitTooltipOptions | string | null | undefined;

  protected override parseOptions(options: string | UIkit.UIkitTooltipOptions): (UIkit.UIkitTooltipOptions & object) | undefined {
    if (typeof options === "string") {
      return { title: options };
    }

    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitTooltipOptions | undefined, _isInitial?: boolean): UIkit.UIkitTooltipElement {
    return UIkit.tooltip(element, options);
  }
}
