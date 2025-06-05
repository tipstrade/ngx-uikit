import { DirectiveTestContext, testUIkitDirective } from "./_directive-test-helpers.spec";
import { VideoDirective } from "./video.directive";

testUIkitDirective({ name: "", selector: "uikitVideo", type: VideoDirective }, (getContext) => {
  let context: DirectiveTestContext<VideoDirective>;

  beforeEach(() => {
    context = getContext();
  });

  it("should handle complex options", () => {
    const options = { autoplay: true };

    context.fixture.componentInstance.options = options;
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual(options);
  });

  it("should handle string options", () => {
    const options = "inview";

    context.fixture.componentInstance.options = options;
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual(options);
  });

  it("should handle boolean options", () => {
    const options = true;

    context.fixture.componentInstance.options = options;
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual(options);
  });
});
