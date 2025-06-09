import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitNav]",
})
export class NavDirective extends UIkitDirective<UIkitNS.UIkitNavOptions, UIkitNS.UIkitNavElement> {
  @Input("uikitNav")
  public override options: UIkitNS.UIkitNavOptions | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitNavOptions): (UIkitNS.UIkitNavOptions & object) | undefined {
    return options;
  }

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitNavOptions | undefined, _isInitial?: boolean): UIkitNS.UIkitNavElement {
    return UIkit.nav(element, options);
  }
}
