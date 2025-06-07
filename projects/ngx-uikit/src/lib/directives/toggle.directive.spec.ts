import type UIkitNS from "uikit";
import { DirectiveTestContext, testUIkitDirective } from "./_directive-test-helpers.spec";
import { ToggleDirective } from "./toggle.directive";

testUIkitDirective({ name: "ToggleDirective", selector: "uikitToggle", type: ToggleDirective }, (getContext) => {
  let context: DirectiveTestContext<ToggleDirective>;

  beforeEach(() => {
    context = getContext();
  });

  it("should handle complex options", () => {
    const options = { connect: "~" } as any as UIkitNS.UIkitToggleOptions;

    context.fixture.componentInstance.options = options;
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual(options);
  });

  it("should handle string options", () => {
    const options = "~";

    context.fixture.componentInstance.options = options;
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual(options);
  });
});
