import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitAlert]",
})
export class AlertDirective extends UIkitDirective<UIkitNS.UIkitAlertOptions, UIkitNS.UIkitAlertElement> {
  @Input("uikitAlert")
  public override options: UIkitNS.UIkitAlertOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitAlertOptions | null): UIkitNS.UIkitAlertElement {
    return UIkit.alert(element, options ?? undefined);
  }
}
