import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitGrid]",
})
export class GridDirective extends UIkitDirective<UIkit.UIkitGridOptions, UIkit.UIkitElementBase> {
  @Input("uikitGrid")
  public override options: UIkit.UIkitGridOptions | "" | null | undefined;

  protected override parseOptions(options: UIkit.UIkitGridOptions): (UIkit.UIkitGridOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitGridOptions | undefined, _isInitial?: boolean): UIkit.UIkitElementBase {
    return UIkit.grid(element, options);
  }
}
