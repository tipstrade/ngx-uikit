import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitUpload]",
})
export class UploadDirective extends UIkitDirective<UIkitNS.UIkitUploadOptions, any> {
  @Input("uikitUpload")
  public override options: UIkitNS.UIkitUploadOptions | null | undefined;

  protected override parseOptions(options: UIkitNS.UIkitUploadOptions): (UIkitNS.UIkitUploadOptions & object) | undefined {
    return options;
  }

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitUploadOptions | undefined, _isInitial?: boolean): any {
    return UIkit.upload(element, options);
  }
}
