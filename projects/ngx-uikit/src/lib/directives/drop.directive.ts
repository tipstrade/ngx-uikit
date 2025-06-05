import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitDrop]",
})
export class DropDirective extends UIkitDirective<UIkit.UIkitDropOptions, UIkit.UIkitDropElement> {
  @Input("uikitDrop")
  public override options: UIkit.UIkitDropOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitDropOptions | null | undefined): UIkit.UIkitDropElement {
    return UIkit.drop(element, options ?? undefined);
  }
}
