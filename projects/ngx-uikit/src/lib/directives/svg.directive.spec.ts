import type UIkitNS from "uikit";
import { DirectiveTestContext, testUIkitDirective } from "./_directive-test-helpers.spec";
import { SvgDirective } from "./svg.directive";

const BadSvgMock: UIkitNS.UIkitSvgOptions = {
  src: "https://non-existent-domain.zzz/foo.svg",
};

testUIkitDirective({ name: "SvgDirective", template: "<img [uikitSvg]=\"options\">", type: SvgDirective }, (getContext) => {
  let context: DirectiveTestContext<SvgDirective>;

  beforeEach(() => {
    context = getContext();
  });

  it("should handle complex options", () => {
    context.fixture.componentInstance.options = BadSvgMock;
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual(BadSvgMock);
  });

  xit("should emit an SVG", async () => {
    context.fixture.componentInstance.options = BadSvgMock;
    context.fixture.detectChanges();

    await expectAsync(context.directiveInstance.ref?.svg).toBeRejected();
  });
});
