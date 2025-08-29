import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitSticky]",
})
export class StickyDirective extends UIkitDirective<UIkit.UIkitStickyOptions, UIkit.UIkitElementBase> {
  @Input("uikitSticky")
  public override options: UIkit.UIkitStickyOptions | "" | null | undefined;

  protected override parseOptions(options: UIkit.UIkitStickyOptions): (UIkit.UIkitStickyOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitStickyOptions | undefined, _isInitial?: boolean): UIkit.UIkitElementBase {
    return UIkit.sticky(element, options);
  }
}
