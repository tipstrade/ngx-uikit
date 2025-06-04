import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitAccordion]",
})
export class AccordionDirective extends UIkitDirective<UIkit.UIkitAccordionOptions, UIkit.UIkitAccordionElement> {
  @Input("uikitAccordion")
  protected override options?: UIkit.UIkitAccordionOptions | null | undefined;

  protected override hookComponent(options: UIkit.UIkitAccordionOptions | null | undefined): UIkit.UIkitAccordionElement | undefined {
    return UIkit.accordion(this.el, options ?? undefined);
  }
}
