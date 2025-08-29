import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitTab]",
})
export class TabDirective extends UIkitDirective<UIkit.UIkitTabOptions, UIkit.UIkitTabElement> {
  @Input("uikitTab")
  public override options: "" | UIkit.UIkitTabOptions | null | undefined;

  protected override createComponent(element: HTMLElement, options: (UIkit.UIkitTabOptions & object) | undefined, _isInitial?: boolean): UIkit.UIkitTabElement {
    return UIkit.tab(element, options);
  }

  protected override parseOptions(options: UIkit.UIkitTabOptions): (UIkit.UIkitTabOptions & object) | undefined {
    return options;
  }
}
