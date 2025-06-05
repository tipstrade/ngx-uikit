import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitLeader]",
})
export class LeaderDirective extends UIkitDirective<UIkit.UIkitLeaderOptions, any> {
  @Input("uikitLeader")
  public override options: UIkit.UIkitLeaderOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitLeaderOptions | null | undefined): any {
    return UIkit.leader(element, options ?? undefined);
  }
}
