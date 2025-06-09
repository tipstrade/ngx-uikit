import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSlider]",
})
export class SliderDirective extends UIkitDirective<UIkitNS.UIkitSliderOptions, UIkitNS.UIkitSliderElement> {
  @Input("uikitSlider")
  public override options: UIkitNS.UIkitSliderOptions | "" | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitSliderOptions): (UIkitNS.UIkitSliderOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkitNS.UIkitSliderOptions | undefined, _isInitial?: boolean): UIkitNS.UIkitSliderElement {
    return UIkit.slider(element, options);
  }
}
