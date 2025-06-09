import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitCountdown]",
})
export class CountdownDirective extends UIkitDirective<UIkitNS.UIkitCountdownOptions, UIkitNS.UIkitCountdownElement> {
  @Input("uikitCountdown")
  public override options: UIkitNS.UIkitCountdownOptions | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitCountdownOptions): (UIkitNS.UIkitCountdownOptions & object) | undefined {
    return options;
  }

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitCountdownOptions | undefined, _isInitial?: boolean): UIkitNS.UIkitCountdownElement {
    return UIkit.countdown(element, options);
  }
}
