import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitParallax]",
})
export class ParallaxDirective extends UIkitDirective<UIkit.UIkitParallaxOptions & any, UIkit.UIkitElementBase> {
  @Input("uikitParallax")
  public override options: UIkit.UIkitParallaxOptions & any | "" | null | undefined;

  protected override parseOptions(options: UIkit.UIkitParallaxOptions & any): (UIkit.UIkitParallaxOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitParallaxOptions | undefined, _isInitial?: boolean): UIkit.UIkitElementBase {
    return UIkit.parallax(element, options);
  }
}
