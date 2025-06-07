import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitImage]",
})
export class ImageDirective extends UIkitDirective<UIkitNS.UIkitImageOptions | string, any> {
  @Input("uikitImage")
  public override options: UIkitNS.UIkitImageOptions | string | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitImageOptions | string | null | undefined): any {
    if (typeof options === "string") {
      options = { dataSrc: options };
    }

    return (UIkit as any).img(element, options ?? undefined);
  }
}
