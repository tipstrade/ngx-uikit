import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitCountdown]",
})
export class CountdownDirective extends UIkitDirective<UIkit.UIkitCountdownOptions, UIkit.UIkitCountdownElement> {
  @Input("uikitCountdown")
  public override options: UIkit.UIkitCountdownOptions | "" | null | undefined;

  protected override parseOptions(options: UIkit.UIkitCountdownOptions): (UIkit.UIkitCountdownOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitCountdownOptions | undefined, _isInitial?: boolean): UIkit.UIkitCountdownElement {
    return UIkit.countdown(element, options);
  }
}
