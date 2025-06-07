import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSvg]",
})
export class SvgDirective extends UIkitDirective<UIkitNS.UIkitSvgOptions, { svg: Promise<any> }> {
  @Input("uikitSvg")
  public override options: UIkitNS.UIkitSvgOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitSvgOptions | null | undefined): { svg: Promise<any> } {
    return UIkit.svg(element, options ?? undefined);
  }
}
