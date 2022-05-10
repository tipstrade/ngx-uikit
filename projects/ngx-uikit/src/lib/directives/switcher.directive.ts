import { Directive, Input } from '@angular/core';
import UIkit from "uikit";
import { DirectiveBase, OptionsMap } from "./directive-base";

@Directive({
  selector: '[ngxUikitSwitcher]'
})
export class SwitcherDirective extends DirectiveBase<UIkit.UIkitSwiterOptions> {
  public readonly attrName = "uk-switcher";

  @Input("ngxUikitSwitcher")
  public options!: UIkit.UIkitSwiterOptions | string;

  // ========================
  // Extra properties
  // ========================

  @Input()
  public connect?: string;

  @Input()
  public toggle?: string;

  @Input()
  public itemNav?: string;

  @Input()
  public active?: number;

  @Input()
  public animation?: string;

  @Input()
  public duration?: number;

  @Input()
  public swiping?: boolean;

  // ========================
  // Methods
  // ========================

  public buildOptionsMap(options: UIkit.UIkitSwiterOptions, map: OptionsMap): void {
    map.set("connect", options.connect);
    map.set("toggle", options.toggle);
    // map.set("itemNav", options.itemNav);
    map.set("active", options.active);
    map.set("animation", options.animation);
    map.set("duration", options.duration);
    map.set("swiping", options.swiping);
  }

  public getOptions(): UIkit.UIkitSwiterOptions {
    const { options } = this;

    if (!options) {
      return {};
    } else if (typeof options === "string") {
      return { connect: options };
    } else {
      return {
        connect: this.connect || options.connect,
        toggle: this.toggle || options.toggle,
        active: this.active || options.active,
        animation: this.animation || options.animation,
        duration: this.duration || options.duration,
        swiping: this.swiping || options.swiping,
      };
    }
  }
}
