import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSlideshow]",
})
export class SlideshowDirective extends UIkitDirective<UIkit.UIkitSlideshowOptions, UIkit.UIkitSlidershowElement> {
  @Input("uikitSlideshow")
  public override options: UIkit.UIkitSlideshowOptions | "" | null | undefined;

  protected override parseOptions(options: UIkit.UIkitSlideshowOptions): (UIkit.UIkitSlideshowOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitSlideshowOptions | undefined): UIkit.UIkitSlidershowElement {
    return UIkit.slideshow(element, options);
  }
}
