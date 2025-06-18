import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

/// =============================REMOVE THIS
interface ExtraOptions {
  handle?: string
}

@Directive({
  selector: "[uikitSortable]",
})
export class SortableDirective extends UIkitDirective<UIkitNS.UIkitSortableOptions & ExtraOptions, any> {
  @Input("uikitSortable")
  public override options: (UIkitNS.UIkitSortableOptions & ExtraOptions) | "" | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitSortableOptions & ExtraOptions): (UIkitNS.UIkitSortableOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkitNS.UIkitSortableOptions | undefined, _isInitial?: boolean): any {
    return UIkit.sortable(element, options);
  }
}
