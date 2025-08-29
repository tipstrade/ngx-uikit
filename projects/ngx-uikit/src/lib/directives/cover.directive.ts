import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitCover]",
})
export class CoverDirective extends UIkitDirective<UIkit.UIkitCoverOptions, UIkit.UIkitElementBase> {
  @Input("uikitCover")
  public override options: UIkit.UIkitCoverOptions | "" | null | undefined;

  protected override parseOptions(options: UIkit.UIkitCoverOptions): (UIkit.UIkitCoverOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitCoverOptions | undefined, _isInitial?: boolean): UIkit.UIkitElementBase {
    return UIkit.cover(element, options);
  }
}
