import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitDropParentIcon]",
})
export class DropParentIconDirective extends UIkitDirective<never, UIkit.UIkitElementBase> {
  @Input("uikitDropParentIcon")
  public override options: "" | never | null | undefined;

  protected override createComponent(element: HTMLElement, _options: never | undefined, _isInitial?: boolean): UIkit.UIkitElementBase {
    return (UIkit as any as { dropParentIcon: (el: HTMLElement) => UIkit.UIkitElementBase }).dropParentIcon(element);
  }

  protected override parseOptions(options: never): never {
    return options;
  }
}
