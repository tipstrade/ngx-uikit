import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitModal]",
})
export class ModalDirective extends UIkitDirective<UIkitNS.UIkitModalOptions, UIkitNS.UIkitModalElement> {
  @Input("uikitModal")
  public override options: UIkitNS.UIkitModalOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitModalOptions | null | undefined): UIkitNS.UIkitModalElement {
    return UIkit.modal(element, options ?? undefined);
  }
}
