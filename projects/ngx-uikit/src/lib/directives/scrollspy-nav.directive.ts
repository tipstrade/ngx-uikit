import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitScrollspyNav]",
})
export class ScrollspyNavDirective extends UIkitDirective<UIkit.UIkitScrollspyNavOptions, UIkit.UIkitElementBase> {
  @Input("uikitScrollspyNav")
  public override options: UIkit.UIkitScrollspyNavOptions | "" | null | undefined;

  protected override parseOptions(options: UIkit.UIkitScrollspyNavOptions): (UIkit.UIkitScrollspyNavOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitScrollspyNavOptions | undefined, _isInitial?: boolean): UIkit.UIkitElementBase {
    return UIkit.scrollspyNav(element, options);
  }
}
