import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSlider]",
})
export class SliderDirective extends UIkitDirective<UIkit.UIkitSliderOptions, UIkit.UIkitSliderElement> {
  @Input("uikitSlider")
  public override options: UIkit.UIkitSliderOptions | "" | null | undefined;

  protected override parseOptions(options: UIkit.UIkitSliderOptions): (UIkit.UIkitSliderOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitSliderOptions | undefined, _isInitial?: boolean): UIkit.UIkitSliderElement {
    return UIkit.slider(element, options);
  }
}
