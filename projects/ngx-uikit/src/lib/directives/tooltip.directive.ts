import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitTooltip]",
})
export class TooltipDirective extends UIkitDirective<UIkit.UIkitTooltipOptions | string, UIkit.UIkitTooltipElement> {
  @Input("uikitTooltip")
  public override options: UIkit.UIkitTooltipOptions | string | null | undefined;

  protected override hookComponent(options: UIkit.UIkitTooltipOptions | string | null | undefined): UIkit.UIkitTooltipElement {
    if (typeof options === "string") {
      options = { title: options };
    }

    return UIkit.tooltip(this.el.nativeElement, options ?? undefined);
  }
}
