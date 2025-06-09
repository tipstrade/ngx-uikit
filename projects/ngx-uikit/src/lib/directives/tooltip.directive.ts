import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitTooltip]",
})
export class TooltipDirective extends UIkitDirective<UIkitNS.UIkitTooltipOptions | string, UIkitNS.UIkitTooltipElement> {
  @Input("uikitTooltip")
  public override options: UIkitNS.UIkitTooltipOptions | string | null | undefined;

  protected override parseOptions(options: string | UIkitNS.UIkitTooltipOptions): (UIkitNS.UIkitTooltipOptions & object) | undefined {
    if (typeof options === "string") {
      return { title: options };
    }

    return options;
  }

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitTooltipOptions | undefined, _isInitial?: boolean): UIkitNS.UIkitTooltipElement {
    return UIkit.tooltip(element, options);
  }
}
