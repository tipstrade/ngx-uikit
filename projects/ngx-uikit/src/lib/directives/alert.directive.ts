import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitAlert]",
})
export class AlertDirective extends UIkitDirective<UIkit.UIkitAlertOptions, UIkit.UIkitAlertElement> {
  @Input("uikitAlert")
  public override options: UIkit.UIkitAlertOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitAlertOptions | null): UIkit.UIkitAlertElement {
    return UIkit.alert(element, options ?? undefined);
  }
}
