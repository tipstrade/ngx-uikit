import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitFormCustom]",
})
export class FormCustomDirective extends UIkitDirective<UIkit.UIkitFormOptions, unknown> {
  @Input("uikitFormCustom")
  public override options: UIkit.UIkitFormOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitFormOptions | null | undefined): unknown {
    return UIkit.formCustom(element, options ?? undefined);
  }
}
