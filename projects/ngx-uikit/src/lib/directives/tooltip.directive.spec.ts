import { DirectiveTestContext, testUIkitDirective } from "./_directive-test-helpers.spec";
import { TooltipDirective } from "./tooltip.directive";

testUIkitDirective({ name: "TooltipDirective", selector: "uikitTooltip", type: TooltipDirective }, (getContext) => {
  let context: DirectiveTestContext<TooltipDirective>;

  beforeEach(() => {
    context = getContext();
  });

  it("should handle string options", () => {
    const options = "New Tooltip";

    context.fixture.componentInstance.options = options;
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual(options);
  });

  it("should handle complex options", () => {
    const options = { title: "New Tooltip" };

    context.fixture.componentInstance.options = options;
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual(options);
  });
});
