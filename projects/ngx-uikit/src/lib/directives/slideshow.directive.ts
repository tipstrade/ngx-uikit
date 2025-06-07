import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSlideshow]",
})
export class SlideshowDirective extends UIkitDirective<UIkitNS.UIkitSlideshowOptions, UIkitNS.UIkitSlidershowElement> {
  @Input("uikitSlideshow")
  public override options: UIkitNS.UIkitSlideshowOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitSlideshowOptions | null | undefined): UIkitNS.UIkitSlidershowElement {
    return UIkit.slideshow(element, options ?? undefined);
  }
}
