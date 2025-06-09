import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitImage]",
})
export class ImageDirective extends UIkitDirective<UIkitNS.UIkitImageOptions | string, any> {
  @Input("uikitImage")
  public override options: UIkitNS.UIkitImageOptions | string | null | undefined;

  protected override parseOptions(options: string | UIkitNS.UIkitImageOptions): (UIkitNS.UIkitImageOptions & object) | undefined {
    if (typeof options === "string") {
      return { dataSrc: options };
    }

    return options;
  }

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitImageOptions | undefined, _isInitial?: boolean): any {
    return (UIkit as any).img(element, options);
  }
}
