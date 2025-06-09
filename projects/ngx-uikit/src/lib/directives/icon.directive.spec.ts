import { DirectiveTestContext, testUIkitDirective } from "./_directive-test-helpers.spec";
import { IconDirective } from "./icon.directive";

testUIkitDirective({
  name: "IconDirective",
  selector: "uikitIcon",
  type: IconDirective,
  expectedOptions: [["facebook", { icon: "facebook" }], [{}, {}]],
  otherTests: (getContext) => {
    let context: DirectiveTestContext<IconDirective>;

    beforeEach(() => {
      context = getContext();
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
  },
});
