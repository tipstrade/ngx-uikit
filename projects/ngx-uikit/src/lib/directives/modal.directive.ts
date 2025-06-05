import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitModal]",
})
export class ModalDirective extends UIkitDirective<UIkit.UIkitModalOptions, UIkit.UIkitModalElement> {
  @Input("uikitModal")
  public override options: UIkit.UIkitModalOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitModalOptions | null | undefined): UIkit.UIkitModalElement {
    return UIkit.modal(element, options ?? undefined);
  }
}
