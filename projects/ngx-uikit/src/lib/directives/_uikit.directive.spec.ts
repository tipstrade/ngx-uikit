import { Directive, Input, SimpleChanges } from "@angular/core";
import { createDirectiveFixtureHost, DirectiveTestContext } from "./_directive-test-helpers.spec";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitTest]",
})
class TestDirective extends UIkitDirective<{ target: string }, unknown> {
  @Input("uikitTest")
  public override options: { target: string } | null | undefined;

  protected override afterViewInit(): void {
    // Noop - ref should be set here
  }

  protected override createComponent(_element: HTMLElement, _options: { target: string } | undefined, _isInitial?: boolean): unknown {
    return {};
  }

  protected override onChanges(_changes: SimpleChanges): void {
    // Noop - Override ngOnChanges so that no ref is set here
  }

  protected override onDestroy(): void {
    // Noop - ref should be set here
  }

  protected override parseOptions(options: { target: string }): ({ target: string } & object) | undefined {
    return options;
  }
}

describe("TestDirective", () => {
  let context: DirectiveTestContext<TestDirective>;

  beforeEach(() => {
    context = createDirectiveFixtureHost("<div [uikitTest]=\"options\"></div>", TestDirective, {}, undefined, false);
  });

  it ("should only set ref once", () => {
    const spy = spyOnProperty(context.directiveInstance, "ref", "set").and.callThrough();

    context.fixture.detectChanges();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
