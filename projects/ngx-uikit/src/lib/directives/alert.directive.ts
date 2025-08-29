import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitAlert]",
})
export class AlertDirective extends UIkitDirective<UIkit.UIkitAlertOptions, UIkit.UIkitAlertElement> {
  @Input("uikitAlert")
  public override options: UIkit.UIkitAlertOptions | "" | null | undefined;

  protected override parseOptions(options: UIkit.UIkitAlertOptions): (UIkit.UIkitAlertOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitAlertOptions | undefined, _isInitial?: boolean): UIkit.UIkitAlertElement {
    return UIkit.alert(element, options);
  }
}
