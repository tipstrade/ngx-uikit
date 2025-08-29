import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitFormCustom]",
})
export class FormCustomDirective extends UIkitDirective<UIkit.UIkitFormOptions | string | boolean, UIkit.UIkitElementBase> {
  @Input("uikitFormCustom")
  public override options: UIkit.UIkitFormOptions | string | boolean | null | undefined;

  protected override parseOptions(options: UIkit.UIkitFormOptions | string | boolean): (UIkit.UIkitFormOptions & object) | undefined {
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

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitFormOptions | undefined, _isInitial?: boolean): UIkit.UIkitElementBase {
    return UIkit.formCustom(element, options);
  }
}
