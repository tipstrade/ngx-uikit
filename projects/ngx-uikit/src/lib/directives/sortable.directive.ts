import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

/// =============================REMOVE THIS
interface ExtraOptions {
  handle?: string
}

@Directive({
  selector: "[uikitSortable]",
})
export class SortableDirective extends UIkitDirective<UIkit.UIkitSortableOptions & ExtraOptions, UIkit.UIkitElementBase> {
  @Input("uikitSortable")
  public override options: (UIkit.UIkitSortableOptions & ExtraOptions) | "" | null | undefined;

  protected override parseOptions(options: UIkit.UIkitSortableOptions & ExtraOptions): (UIkit.UIkitSortableOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitSortableOptions | undefined, _isInitial?: boolean): UIkit.UIkitElementBase {
    return UIkit.sortable(element, options);
  }
}
