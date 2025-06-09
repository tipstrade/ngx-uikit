import { Directive, Input, SimpleChanges } from "@angular/core";
import { createDirectiveFixtureHost, DirectiveTestContext } from "./_directive-test-helpers.spec";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitTest]",
})
class TestDirective extends UIkitDirective<{ target: string }, object> {
  @Input("uikitTest")
  public override options: { target: string } | null | undefined;

  protected override afterViewInit(): void {
    // Noop
  }

  protected override hookComponent(_element: HTMLElement, _options: { target: string } | undefined, _isInitial?: boolean): object {
    return {};
  }

  protected override onChanges(_changes: SimpleChanges): void {
    this.ref = this.hookComponent(this.el.nativeElement, this.getOptions());
  }

  protected override onDestroy(): void {
    // Noop
  }

  protected override parseOptions(options: { target: string }): ({ target: string } & object) | undefined {
    return options;
  }
}

describe("TestDirective", () => {
  let context: DirectiveTestContext<TestDirective>;

  beforeEach(() => {
    context = createDirectiveFixtureHost("<div [uikitTest]=\"options\"></div>", TestDirective, {}, false);
  });

  it ("should only set ref once", () => {
    const spy = spyOnProperty(context.directiveInstance, "ref", "set").and.callThrough();

    context.fixture.detectChanges();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
