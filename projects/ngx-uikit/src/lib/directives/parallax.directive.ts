import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitParallax]",
})
export class ParallaxDirective extends UIkitDirective<UIkit.UIkitParallaxOptions, any> {
  @Input("uikitParallax")
  public override options: UIkit.UIkitParallaxOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitParallaxOptions | null | undefined): any {
    return UIkit.parallax(element, options ?? undefined);
  }
}
