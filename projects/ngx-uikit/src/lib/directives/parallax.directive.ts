import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitParallax]",
})
export class ParallaxDirective extends UIkitDirective<UIkitNS.UIkitParallaxOptions, any> {
  @Input("uikitParallax")
  public override options: UIkitNS.UIkitParallaxOptions | "" | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitParallaxOptions): (UIkitNS.UIkitParallaxOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkitNS.UIkitParallaxOptions | undefined, _isInitial?: boolean): any {
    return UIkit.parallax(element, options);
  }
}
