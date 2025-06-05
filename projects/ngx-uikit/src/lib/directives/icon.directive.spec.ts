import { DirectiveTestContext, testUIkitDirective } from "./_directive-test-helpers.spec";
import { IconDirective } from "./icon.directive";

testUIkitDirective({ name: "IconDirective", selector: "uikitIcon", type: IconDirective }, (getContext) => {
  let context: DirectiveTestContext<IconDirective>;

  beforeEach(() => {
    context = getContext();
  });

  it("should handle complex options", () => {
    const options = { icon: "facebook" };

    context.fixture.componentInstance.options = options;
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual(options);
  });

  it("should handle string options", () => {
    const options = "facebook";

    context.fixture.componentInstance.options = options;
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual(options);
  });

  it("should emit an SVG", async () => {
    context.fixture.componentInstance.options = "facebook";
    context.fixture.detectChanges();

    expect(context.directiveInstance.ref?.svg).toBeDefined();
    await expectAsync(context.directiveInstance.ref?.svg).toBeResolved();
  });
});
