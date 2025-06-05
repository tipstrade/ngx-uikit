import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSvg]",
})
export class SvgDirective extends UIkitDirective<UIkit.UIkitSvgOptions, { svg: Promise<any> }> {
  @Input("uikitSvg")
  public override options: UIkit.UIkitSvgOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitSvgOptions | null | undefined): { svg: Promise<any> } {
    return UIkit.svg(element, options ?? undefined);
  }
}
