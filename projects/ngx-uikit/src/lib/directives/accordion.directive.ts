import { Directive, Input } from "@angular/core";
import UIkit from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitAccordion]",
})
export class AccordionDirective extends UIkitDirective<UIkit.UIkitAccordionOptions, UIkit.UIkitAccordionElement> {
  @Input("uikitAccordion")
  public override options: UIkit.UIkitAccordionOptions | "" | null | undefined;

  protected override parseOptions(options: UIkit.UIkitAccordionOptions): (UIkit.UIkitAccordionOptions & object) | undefined {
    return options;
  }

  protected override createComponent(element: HTMLElement, options: UIkit.UIkitAccordionOptions | undefined): UIkit.UIkitAccordionElement {
    return UIkit.accordion(element, options);
  }

  public collapseAll(animate = true): void {
    if (this.ref && "items" in this.ref && Array.isArray(this.ref.items)) {
      // This is the class that is used to indicate the item is expanded
      const { clsOpen } = this.ref as unknown as { clsOpen: string };

      this.ref.items.forEach((item: HTMLElement) => {
        const isOpen = item.classList.contains(clsOpen);

        if (isOpen && this.ref) {
          this.ref.toggle(item, animate);
        }
      });
    }
  }
}
