import { DirectiveTestContext, testUIkitDirective } from "././_directive-test-helpers.spec";
import { AccordionDirective } from "./accordion.directive";

const template = `<ul [uikitAccordion]="options">
    <li class="uk-open">
        <a class="uk-accordion-title" href>Item 1</a>
        <div class="uk-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>Item 2</a>
        <div class="uk-accordion-content">
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>Item 3</a>
        <div class="uk-accordion-content">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
        </div>
    </li>
</ul>`;

testUIkitDirective({
  name: "AccordionDirective",
  template, type: AccordionDirective,

  otherTests: (getContext) => {
    let context: DirectiveTestContext<AccordionDirective>;

    beforeEach(() => {
      context = getContext();
    });

    it("should collapse all children", () => {
      context.directiveInstance.collapseAll();
      context.fixture.detectChanges();

      const items = context.directiveInstance.ref?.items as HTMLElement[];
      const allCollapsed = items.every(x => !x.classList.contains("uk-open"));

      expect(allCollapsed).toBeTrue();
    });
  },
});
