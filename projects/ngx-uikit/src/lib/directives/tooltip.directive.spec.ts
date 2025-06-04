import { DirectiveTestContext, getHookComponentSpy, testUIkitDirective } from "./_directive-test-helpers.spec";
import { TooltipDirective } from "./tooltip.directive";

testUIkitDirective({ name: "TooltipDirective", selector: "uikitTooltip", type: TooltipDirective, defaultOptions: "My Tooltip" }, (getContext) => {
  let context: DirectiveTestContext<TooltipDirective>;

  beforeEach(() => {
    context = getContext();
  });

  it("should handle complex options", () => {
    const options = { title: "New Tooltip" };

    context.fixture.componentInstance.options = options;
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual(options);
  });

  it("should call hookComponent", () => {
    const spy = getHookComponentSpy(context.directiveInstance);

    context.fixture.componentInstance.options = "New Tooltip";
    context.fixture.detectChanges();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
