import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitGrid]",
})
export class GridDirective extends UIkitDirective<UIkitNS.UIkitGridOptions, any> {
  @Input("uikitGrid")
  public override options: UIkitNS.UIkitGridOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitGridOptions | null | undefined): any {
    return UIkit.grid(element, options ?? undefined);
  }
}
