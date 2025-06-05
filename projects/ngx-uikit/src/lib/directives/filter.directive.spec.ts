import { DirectiveTestContext, testUIkitDirective } from "./_directive-test-helpers.spec";
import { FilterDirective } from "./filter.directive";

testUIkitDirective({ name: "FilterDirective", selector: "uikitFilter", type: FilterDirective }, (getContext) => {
  let context: DirectiveTestContext<FilterDirective>;

  beforeEach(() => {
    context = getContext();
  });

  it("should handle string options", () => {
    const options = "abc";

    context.fixture.componentInstance.options = options;
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual(options);
  });
});
