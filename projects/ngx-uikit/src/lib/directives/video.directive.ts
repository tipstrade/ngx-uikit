import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitVideo]",
})
export class VideoDirective extends UIkitDirective<UIkitNS.UIkitVideoOptions | string | boolean, any> {
  @Input("uikitVideo")
  public override options: string | boolean | UIkitNS.UIkitVideoOptions | null | undefined;

  protected override parseOptions(options: string | boolean | UIkitNS.UIkitVideoOptions): (UIkitNS.UIkitVideoOptions & object) | undefined {
    if (typeof options === "string" || typeof options === "boolean") {
      return { autoplay: options };
    }

    return options;
  }

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitVideoOptions | undefined, _isInitial?: boolean): any {
    return UIkit.video(element, options);
  }
}
