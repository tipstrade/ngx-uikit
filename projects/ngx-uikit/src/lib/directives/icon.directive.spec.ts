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

  it("should resolve an SVG", async () => {
    context.fixture.componentInstance.options = "facebook";
    context.fixture.detectChanges();

    const svg = context.directiveInstance.ref?.svg;

    expect(svg).toBeDefined();
    await expectAsync(svg).toBeResolved();
    await expectAsync(svg?.then(x => x instanceof SVGElement)).toBeResolvedTo(true);
  });

  it("should resolve and undefined svg", async () => {
    context.fixture.componentInstance.options = "xxx-facebook";
    context.fixture.detectChanges();

    const svg = context.directiveInstance.ref?.svg;

    expect(svg).toBeDefined();
    await expectAsync(svg).toBeResolved();
    await expectAsync(svg?.then(x => x === undefined)).toBeResolvedTo(true);
  });
});
