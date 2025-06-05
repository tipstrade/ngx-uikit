import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitScrollspy]",
})
export class ScrollspyDirective extends UIkitDirective<UIkit.UIkitScrollspyOptions | string, any> {
  @Input("uikitScrollspy")
  public override options: string | UIkit.UIkitScrollspyOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: string | UIkit.UIkitScrollspyOptions | null | undefined): any {
    if (typeof options === "string") {
      options = { cls: options };
    }

    return UIkit.scrollspy(element, options ?? undefined);
  }
}
