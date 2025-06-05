import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitScrollspyNav]",
})
export class ScrollspyNavDirective extends UIkitDirective<UIkit.UIkitScrollspyNavOptions, any> {
  @Input("uikitScrollspyNav")
  public override options: UIkit.UIkitScrollspyNavOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitScrollspyNavOptions | null | undefined): any {
    return UIkit.scrollspyNav(element, options ?? undefined);
  }
}
