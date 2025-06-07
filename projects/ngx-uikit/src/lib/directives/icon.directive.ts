import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitIcon]",
})
export class IconDirective extends UIkitDirective<UIkitNS.UIkitIconOptions | string, { svg: Promise<any> }> {
  @Input("uikitIcon")
  public override options: UIkitNS.UIkitIconOptions | string | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitIconOptions | string | null | undefined): { svg: Promise<any> } {
    if (typeof options === "string") {
      options = { icon: options };
    }

    return UIkit.icon(element, options ?? undefined);
  }
}
