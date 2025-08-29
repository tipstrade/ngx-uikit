import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitVideo]",
})
export class VideoDirective extends UIkitDirective<UIkit.UIkitVideoOptions | string | boolean, UIkit.UIkitElementBase> {
  @Input("uikitVideo")
  public override options: string | boolean | UIkit.UIkitVideoOptions | "" | null | undefined;

  protected override parseOptions(options: string | boolean | UIkit.UIkitVideoOptions): (UIkit.UIkitVideoOptions & object) | undefined {
    if (typeof options === "boolean") {
      return { autoplay: options };
    } else if (options === "true") {
      return { autoplay: true };
    } else if (options === "false") {
      return { autoplay: false };
    } else if (typeof options === "string") {
      return { autoplay: options };
    }

    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitVideoOptions | undefined, _isInitial?: boolean): UIkit.UIkitElementBase {
    return UIkit.video(element, options);
  }
}
