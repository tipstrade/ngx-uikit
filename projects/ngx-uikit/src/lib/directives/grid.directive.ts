import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitGrid]",
})
export class GridDirective extends UIkitDirective<UIkitNS.UIkitGridOptions, any> {
  @Input("uikitGrid")
  public override options: UIkitNS.UIkitGridOptions | "" | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitGridOptions): (UIkitNS.UIkitGridOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkitNS.UIkitGridOptions | undefined, _isInitial?: boolean): any {
    return UIkit.grid(element, options);
  }
}
