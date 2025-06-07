import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitTooltip]",
})
export class TooltipDirective extends UIkitDirective<UIkitNS.UIkitTooltipOptions | string, UIkitNS.UIkitTooltipElement> {
  @Input("uikitTooltip")
  public override options: UIkitNS.UIkitTooltipOptions | string | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitTooltipOptions | string | null | undefined): UIkitNS.UIkitTooltipElement {
    if (typeof options === "string") {
      options = { title: options };
    }

    return UIkit.tooltip(element, options ?? undefined);
  }
}
