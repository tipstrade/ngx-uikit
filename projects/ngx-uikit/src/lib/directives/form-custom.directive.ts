import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitFormCustom]",
})
export class FormCustomDirective extends UIkitDirective<UIkitNS.UIkitFormOptions, any> {
  @Input("uikitFormCustom")
  public override options: UIkitNS.UIkitFormOptions | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitFormOptions): (UIkitNS.UIkitFormOptions & object) | undefined {
    return options;
  }

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitFormOptions | undefined, _isInitial?: boolean): any {
    return UIkit.formCustom(element, options);
  }
}
