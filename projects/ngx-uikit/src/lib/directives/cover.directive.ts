import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitCover]",
})
export class CoverDirective extends UIkitDirective<UIkit.UIkitCoverOptions, unknown> {
  @Input("uikitCover")
  public override options: UIkit.UIkitCoverOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitCoverOptions | null | undefined): unknown {
    return UIkit.cover(element, options ?? undefined);
  }
}
