import { DirectiveTestContext, testUIkitDirective } from "./_directive-test-helpers.spec";
import { ImageDirective } from "./image.directive";

const Base64ImageMock = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAABRklEQVR4nAA2Acn+BO3ZLibM8fwSycMa9ZYxrNSUgX/hnbhonATOX64IzQHwSbKtYjHlfwDnuQHkuLNnH/Ozg5Rt9b3h9zF1PssDewXNDRj2EhFF9V37d3z+C38MptJU/Kxz1xrr/XW7ARduAKu/C8kjm/Tl1vqQPNcziarVrds9Z7Iz8r/TNACC7R30ECYOOKpnAzgPijXsN8Kzh+MtcUb4YsdCg70E9df8wfmHJFOjgvZ99kkJ6CQAYGncQOYKwHfV6kpwA6jKafbsp6EDjUBlq0fBBvFXf+LiTEPw5dxuAaduyAFQrGVoDSMqGAjudTvzhj6we2cswNsPEJBjaoMMJ/AEWH6cg6suT7atQg4KFRvz35T40vqS1i0SxL4jmO3QAFM3kkrq47cGL4ake8i+SN0Vx/5eyFn32QsoFquDfwEAAP//CQmePMeKA2UAAAAASUVORK5CYII=";

testUIkitDirective({ name: "ImageDirective", selector: "uikitImage", type: ImageDirective }, (getContext) => {
  let context: DirectiveTestContext<ImageDirective>;

  beforeEach(() => {
    context = getContext();
  });

  it("should handle complex options", () => {
    const options = { dataSrc: Base64ImageMock };

    context.fixture.componentInstance.options = options;
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual(options);
  });

  it("should handle complex options", () => {
    const options = Base64ImageMock;

    context.fixture.componentInstance.options = options;
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual(options);
  });
});
