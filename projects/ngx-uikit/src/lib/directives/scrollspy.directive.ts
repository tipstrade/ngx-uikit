import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitScrollspy]",
})
export class ScrollspyDirective extends UIkitDirective<UIkit.UIkitScrollspyOptions | string, UIkit.UIkitElementBase> {
  @Input("uikitScrollspy")
  public override options: string | UIkit.UIkitScrollspyOptions | "" | null | undefined;

  protected override parseOptions(options: string | UIkit.UIkitScrollspyOptions): (UIkit.UIkitScrollspyOptions & object) | undefined {
    if (typeof options === "string") {
      return { cls: options };
    }

    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitScrollspyOptions | undefined, _isInitial?: boolean): UIkit.UIkitElementBase {
    return UIkit.scrollspy(element, options);
  }
}
