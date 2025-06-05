import { DirectiveTestContext, testUIkitDirective } from "./_directive-test-helpers.spec";
import { ScrollspyDirective } from "./scrollspy.directive";

testUIkitDirective({ name: "ScrollspyDirective", selector: "uikitScrollspy", type: ScrollspyDirective }, (getContext) => {
  let context: DirectiveTestContext<ScrollspyDirective>;

  beforeEach(() => {
    context = getContext();
  });

  it("should handle complex options", () => {
    const options = { cls: "abc" };

    context.fixture.componentInstance.options = options;
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual(options);
  });

  it("should handle string options", () => {
    const options = "abc";

    context.fixture.componentInstance.options = options;
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual(options);
  });
});
