import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitIcon]",
})
export class IconDirective extends UIkitDirective<UIkitNS.UIkitIconOptions | string, { svg: Promise<any> }> {
  @Input("uikitIcon")
  public override options: UIkitNS.UIkitIconOptions | string | null | undefined;

  protected override parseOptions(options: string | UIkitNS.UIkitIconOptions): (UIkitNS.UIkitIconOptions & object) | undefined {
    if (typeof options === "string") {
      return { icon: options };
    }

    return options;
  }

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitIconOptions | undefined, _isInitial?: boolean): { svg: Promise<any> } {
    return UIkit.icon(element, options);
  }
}
