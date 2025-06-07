import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitCover]",
})
export class CoverDirective extends UIkitDirective<UIkitNS.UIkitCoverOptions, any> {
  @Input("uikitCover")
  public override options: UIkitNS.UIkitCoverOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitCoverOptions | null | undefined): any {
    return UIkit.cover(element, options ?? undefined);
  }
}
