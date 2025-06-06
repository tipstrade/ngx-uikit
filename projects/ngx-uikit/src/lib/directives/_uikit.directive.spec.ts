import { Directive, Input, SimpleChanges } from "@angular/core";
import { createDirectiveFixtureHost, DirectiveTestContext } from "./_directive-test-helpers.spec";
import { UIkitDirective } from "./_uikit.directive";

@Directive({
  selector: "[uikitTest]",
})
class TestDirective extends UIkitDirective<number, object> {
  @Input("uikitTest")
  public override options: number | null | undefined;

  protected override afterViewInit(): void {
    // Noop
  }

  protected override onChanges(_changes: SimpleChanges): void {
    this.ref = this.hookComponent(this.el.nativeElement, this.options);
  }

  protected override onDestroy(): void {
    // Noop
  }

  protected override hookComponent(_element: HTMLElement, _options: number | null | undefined, _isInitial?: boolean): object {
    return {};
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
