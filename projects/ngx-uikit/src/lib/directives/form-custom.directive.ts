import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitFormCustom]",
})
export class FormCustomDirective extends UIkitDirective<UIkitNS.UIkitFormOptions | string | boolean, any> {
  @Input("uikitFormCustom")
  public override options: UIkitNS.UIkitFormOptions | string | boolean | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitFormOptions | string | boolean): (UIkitNS.UIkitFormOptions & object) | undefined {
    if (typeof options === "boolean") {
      return { target: options };
    } else if (options === "true") {
      return { target: true };
    } else if (options === "false") {
      return { target: false };
    } else if (typeof options === "string") {
      return { target: options };
    }

    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkitNS.UIkitFormOptions | undefined, _isInitial?: boolean): any {
    return UIkit.formCustom(element, options);
  }
}
