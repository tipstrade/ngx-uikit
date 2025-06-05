import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSortable]",
})
export class SortableDirective extends UIkitDirective<UIkit.UIkitSortableOptions, any> {
  @Input("uikitSortable")
  public override options: UIkit.UIkitSortableOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitSortableOptions | null | undefined): any {
    return UIkit.sortable(element, options ?? undefined);
  }
}
