import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitModal]",
})
export class ModalDirective extends UIkitDirective<UIkit.UIkitModalOptions, UIkit.UIkitModalElement> {
  @Input("uikitModal")
  public override options: UIkit.UIkitModalOptions | "" | null | undefined;

  protected override parseOptions(options: UIkit.UIkitModalOptions): (UIkit.UIkitModalOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitModalOptions | undefined, _isInitial?: boolean): UIkit.UIkitModalElement {
    return UIkit.modal(element, options);
  }
}
