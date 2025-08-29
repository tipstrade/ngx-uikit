import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitDropnav]",
})
export class DropnavDirective extends UIkitDirective<UIkit.UIkitDropnavOptions, UIkit.UIkitElementBase> {
  @Input("uikitDropnav")
  public override options: "" | UIkit.UIkitDropnavOptions | null | undefined;

  protected override createComponent(element: HTMLElement, options: (UIkit.UIkitDropnavOptions & object) | undefined, _isInitial?: boolean): UIkit.UIkitElementBase {
    return UIkit.dropnav(element, options);
  }

  protected override parseOptions(options: UIkit.UIkitDropnavOptions): (UIkit.UIkitDropnavOptions & object) | undefined {
    return options;
  }
}
