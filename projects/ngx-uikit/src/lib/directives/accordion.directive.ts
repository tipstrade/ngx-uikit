import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitAccordion]",
})
export class AccordionDirective extends UIkitDirective<UIkit.UIkitAccordionOptions, UIkit.UIkitAccordionElement> {
  @Input("uikitAccordion")
  public override options: UIkit.UIkitAccordionOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkit.UIkitAccordionOptions | null | undefined): UIkit.UIkitAccordionElement {
    return UIkit.accordion(element, options ?? undefined);
  }
}
