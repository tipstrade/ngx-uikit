import { Directive, Input } from "@angular/core";
import UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitTab]",
})
export class TabDirective extends UIkitDirective<UIkitNS.UIkitTabOptions, any> {
  @Input("uikitTab")
  public override options: "" | UIkitNS.UIkitTabOptions | null | undefined;

  protected override createComponent(element: HTMLElement, options: (UIkitNS.UIkitTabOptions & object) | undefined, _isInitial?: boolean): any {
    return UIkit.tab(element, options);
  }

  protected override parseOptions(options: UIkitNS.UIkitTabOptions): (UIkitNS.UIkitTabOptions & object) | undefined {
    return options;
  }
}
