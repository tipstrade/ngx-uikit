import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitScrollspy]",
})
export class ScrollspyDirective extends UIkitDirective<UIkitNS.UIkitScrollspyOptions | string, any> {
  @Input("uikitScrollspy")
  public override options: string | UIkitNS.UIkitScrollspyOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: string | UIkitNS.UIkitScrollspyOptions | null | undefined): any {
    if (typeof options === "string") {
      options = { cls: options };
    }

    return UIkit.scrollspy(element, options ?? undefined);
  }
}
