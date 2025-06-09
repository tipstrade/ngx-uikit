import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSortable]",
})
export class SortableDirective extends UIkitDirective<UIkitNS.UIkitSortableOptions, any> {
  @Input("uikitSortable")
  public override options: UIkitNS.UIkitSortableOptions | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitSortableOptions): (UIkitNS.UIkitSortableOptions & object) | undefined {
    return options;
  }

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitSortableOptions | undefined, _isInitial?: boolean): any {
    return UIkit.sortable(element, options);
  }
}
