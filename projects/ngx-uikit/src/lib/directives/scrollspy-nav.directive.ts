import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitScrollspyNav]",
})
export class ScrollspyNavDirective extends UIkitDirective<UIkitNS.UIkitScrollspyNavOptions, any> {
  @Input("uikitScrollspyNav")
  public override options: UIkitNS.UIkitScrollspyNavOptions | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitScrollspyNavOptions): (UIkitNS.UIkitScrollspyNavOptions & object) | undefined {
    return options;
  }

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitScrollspyNavOptions | undefined, _isInitial?: boolean): any {
    return UIkit.scrollspyNav(element, options);
  }
}
