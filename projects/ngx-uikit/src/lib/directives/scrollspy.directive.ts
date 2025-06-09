import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitScrollspy]",
})
export class ScrollspyDirective extends UIkitDirective<UIkitNS.UIkitScrollspyOptions | string, any> {
  @Input("uikitScrollspy")
  public override options: string | UIkitNS.UIkitScrollspyOptions | "" | null | undefined;

  protected override parseOptions(options: string | UIkitNS.UIkitScrollspyOptions): (UIkitNS.UIkitScrollspyOptions & object) | undefined {
    if (typeof options === "string") {
      return { cls: options };
    }

    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkitNS.UIkitScrollspyOptions | undefined, _isInitial?: boolean): any {
    return UIkit.scrollspy(element, options);
  }
}
