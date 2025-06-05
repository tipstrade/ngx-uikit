import { DirectiveTestContext, testUIkitDirective } from "./_directive-test-helpers.spec";
import { OffCanvasDirective } from "./off-canvas.directive";

testUIkitDirective({ name: "OffCanvasDirective", selector: "uikitOffCanvas", type: OffCanvasDirective }, (getContext) => {
  let context: DirectiveTestContext<OffCanvasDirective>;

  beforeEach(() => {
    context = getContext();
  });

  it("should handle complex options", () => {
    const options = { mode: "slide" };

    context.fixture.componentInstance.options = options;
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual(options);
  });

  it("should handle string options", () => {
    const options = "slide";

    context.fixture.componentInstance.options = options;
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual(options);
  });
});
