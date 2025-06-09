import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitModal]",
})
export class ModalDirective extends UIkitDirective<UIkitNS.UIkitModalOptions, UIkitNS.UIkitModalElement> {
  @Input("uikitModal")
  public override options: UIkitNS.UIkitModalOptions | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitModalOptions): (UIkitNS.UIkitModalOptions & object) | undefined {
    return options;
  }

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitModalOptions | undefined, _isInitial?: boolean): UIkitNS.UIkitModalElement {
    return UIkit.modal(element, options);
  }
}
