import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitLeader]",
})
export class LeaderDirective extends UIkitDirective<UIkitNS.UIkitLeaderOptions, any> {
  @Input("uikitLeader")
  public override options: UIkitNS.UIkitLeaderOptions | "" | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitLeaderOptions): (UIkitNS.UIkitLeaderOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkitNS.UIkitLeaderOptions | undefined, _isInitial?: boolean): any {
    return UIkit.leader(element, options);
  }
}
