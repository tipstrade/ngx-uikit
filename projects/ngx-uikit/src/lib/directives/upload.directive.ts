import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitUpload]",
})
export class UploadDirective extends UIkitDirective<UIkit.UIkitUploadOptions, any> {
  @Input("uikitUpload")
  public override options: UIkit.UIkitUploadOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitUploadOptions | null | undefined): any {
    return UIkit.upload(element, options ?? undefined);
  }
}
