import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitGrid]",
})
export class GridDirective extends UIkitDirective<UIkit.UIkitGridOptions, any> {
  @Input("uikitGrid")
  public override options: UIkit.UIkitGridOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitGridOptions | null | undefined): any {
    return UIkit.grid(element, options ?? undefined);
  }
}
