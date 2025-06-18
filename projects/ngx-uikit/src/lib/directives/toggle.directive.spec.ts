import { DirectiveTestContext, testUIkitDirective } from "./_directive-test-helpers.spec";
import { ToggleDirective } from "./toggle.directive";

testUIkitDirective({
  name: "ToggleDirective",
  selector: "uikitToggle",
  type: ToggleDirective,
  expectedOptions: [[".toggle-target", { target: ".toggle-target" }]],
  otherTests: (getContext) => {
    let context: DirectiveTestContext<ToggleDirective>;

    beforeEach(() => {
      context = getContext();
    });

    it("should handle HTML element as a default parameter", () => {
      const div = document.createElement("div");
      context.fixture.componentInstance.options = div;
      context.fixture.detectChanges();

      expect(context.directiveInstance.getOptions()).toEqual({ target: div });
    });
  },
});
