import { Directive, Input } from "@angular/core";
import type UIkitNS from "uikit";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitAccordion]",
})
export class AccordionDirective extends UIkitDirective<UIkitNS.UIkitAccordionOptions, UIkitNS.UIkitAccordionElement> {
  @Input("uikitAccordion")
  public override options: UIkitNS.UIkitAccordionOptions | null | undefined;

  protected override hookComponent(element: HTMLElement, options: UIkitNS.UIkitAccordionOptions | null | undefined): UIkitNS.UIkitAccordionElement {
    return UIkit.accordion(element, options ?? undefined);
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
