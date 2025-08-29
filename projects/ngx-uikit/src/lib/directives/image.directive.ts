import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitImage]",
})
export class ImageDirective extends UIkitDirective<UIkit.UIkitImageOptions | string, UIkit.UIkitElementBase> {
  @Input("uikitImage")
  public override options: UIkit.UIkitImageOptions | string | null | undefined;

  protected override parseOptions(options: string | UIkit.UIkitImageOptions): (UIkit.UIkitImageOptions & object) | undefined {
    if (typeof options === "string") {
      return { dataSrc: options };
    }

    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitImageOptions | undefined, _isInitial?: boolean): UIkit.UIkitElementBase {
    return UIkit.img(element, options);
  }
}
