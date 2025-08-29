import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitNav]",
})
export class NavDirective extends UIkitDirective<UIkit.UIkitNavOptions, UIkit.UIkitNavElement> {
  @Input("uikitNav")
  public override options: UIkit.UIkitNavOptions | "" | null | undefined;

  protected override parseOptions(options: UIkit.UIkitNavOptions): (UIkit.UIkitNavOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitNavOptions | undefined, _isInitial?: boolean): UIkit.UIkitNavElement {
    return UIkit.nav(element, options);
  }
}
