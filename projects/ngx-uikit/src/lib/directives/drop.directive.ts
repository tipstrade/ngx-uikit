import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitDrop]",
})
export class DropDirective extends UIkitDirective<UIkitNS.UIkitDropOptions, UIkitNS.UIkitDropElement> {
  @Input("uikitDrop")
  public override options: UIkitNS.UIkitDropOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitDropOptions | null | undefined): UIkitNS.UIkitDropElement {
    return UIkit.drop(element, options ?? undefined);
  }
}
