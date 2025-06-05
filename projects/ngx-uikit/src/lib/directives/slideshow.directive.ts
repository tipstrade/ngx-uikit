import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSlideshow]",
})
export class SlideshowDirective extends UIkitDirective<UIkit.UIkitSlideshowOptions, UIkit.UIkitSlidershowElement> {
  @Input("uikitSlideshow")
  public override options: UIkit.UIkitSlideshowOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitSlideshowOptions | null | undefined): UIkit.UIkitSlidershowElement {
    return UIkit.slideshow(element, options ?? undefined);
  }
}
