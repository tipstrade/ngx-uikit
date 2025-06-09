import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSlideshow]",
})
export class SlideshowDirective extends UIkitDirective<UIkitNS.UIkitSlideshowOptions, UIkitNS.UIkitSlidershowElement> {
  @Input("uikitSlideshow")
  public override options: UIkitNS.UIkitSlideshowOptions | "" | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitSlideshowOptions): (UIkitNS.UIkitSlideshowOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkitNS.UIkitSlideshowOptions | undefined): UIkitNS.UIkitSlidershowElement {
    return UIkit.slideshow(element, options);
  }
}
