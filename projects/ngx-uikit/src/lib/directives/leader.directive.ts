import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitLeader]",
})
export class LeaderDirective extends UIkitDirective<UIkit.UIkitLeaderOptions, UIkit.UIkitElementBase> {
  @Input("uikitLeader")
  public override options: UIkit.UIkitLeaderOptions | "" | null | undefined;

  protected override parseOptions(options: UIkit.UIkitLeaderOptions): (UIkit.UIkitLeaderOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitLeaderOptions | undefined, _isInitial?: boolean): UIkit.UIkitElementBase {
    return UIkit.leader(element, options);
  }
}
