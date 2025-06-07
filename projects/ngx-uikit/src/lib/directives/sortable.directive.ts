import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSortable]",
})
export class SortableDirective extends UIkitDirective<UIkitNS.UIkitSortableOptions, any> {
  @Input("uikitSortable")
  public override options: UIkitNS.UIkitSortableOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitSortableOptions | null | undefined): any {
    return UIkit.sortable(element, options ?? undefined);
  }
}
