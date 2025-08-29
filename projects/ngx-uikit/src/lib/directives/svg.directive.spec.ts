import UIkit from "uikit";
import { DirectiveTestContext, testUIkitDirective } from "./_directive-test-helpers.spec";
import { SvgDirective } from "./svg.directive";

const BadSvgMock: UIkit.UIkitSvgOptions = {
  src: "https://non-existent-domain.zzz/foo.svg",
};

const GoodSvgMock: UIkit.UIkitSvgOptions = {
  src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><circle cx='50' cy='50' r='40' fill='red' /></svg>",
};

testUIkitDirective({
  name: "SvgDirective",
  template: "<img [uikitSvg]=\"options\">", type: SvgDirective,
  expectedOptions: [[BadSvgMock, BadSvgMock], [GoodSvgMock, GoodSvgMock]],
  otherTests: (getContext) => {
    let context: DirectiveTestContext<SvgDirective>;

    beforeEach(() => {
      context = getContext();
    });

    it("should emit an SVG", async () => {
      context.fixture.componentInstance.options = GoodSvgMock;
      context.fixture.detectChanges();

      const svg = context.directiveInstance.ref?.svg;
      const isSvg = svg?.then(x => x instanceof SVGElement);

      await expectAsync(isSvg).toBeResolvedTo(true);
    });

    it("shouldn't emit an SVG", async () => {
      context.fixture.componentInstance.options = BadSvgMock;
      context.fixture.detectChanges();

      const svg = context.directiveInstance.ref?.svg;

      await expectAsync(svg).toBeResolvedTo(undefined);
    });
  },
});
