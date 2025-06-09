import type UIkitNS from "uikit";
import { DirectiveTestContext, testUIkitDirective } from "./_directive-test-helpers.spec";
import { SvgDirective } from "./svg.directive";

const BadSvgMock: UIkitNS.UIkitSvgOptions = {
  dataSrc: "https://non-existent-domain.zzz/foo.svg",
};

testUIkitDirective({
  name: "SvgDirective",
  template: "<img [uikitSvg]=\"options\">", type: SvgDirective,
  expectedOptions: [[BadSvgMock, BadSvgMock]],
  otherTests: (getContext) => {
    let context: DirectiveTestContext<SvgDirective>;

    beforeEach(() => {
      context = getContext();
    });

    xit("should emit an SVG", async () => {
      context.fixture.componentInstance.options = BadSvgMock;
      context.fixture.detectChanges();

      await expectAsync(context.directiveInstance.ref?.svg).toBeRejected();
    });
  },
});
