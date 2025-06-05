import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitVideo]",
})
export class VideoDirective extends UIkitDirective<UIkit.UIkitVideoOptions | string | boolean, any> {
  @Input("uikitVideo")
  public override options: string | boolean | UIkit.UIkitVideoOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: string | boolean | UIkit.UIkitVideoOptions | null | undefined): any {
    if (typeof options === "string" || typeof options === "boolean") {
      options = { autoplay: options };
    }

    return UIkit.video(element, options ?? undefined);
  }
}
