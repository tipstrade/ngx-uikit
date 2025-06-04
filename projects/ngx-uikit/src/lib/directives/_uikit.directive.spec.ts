import { Directive, Input, SimpleChanges } from "@angular/core";
import { testUIkitDirective } from "./_directive-test-helpers.spec";
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
    this.ref = this.hookComponent(this.options);
  }

  protected override onDestroy(): void {
    // Noop
  }

  protected override hookComponent(_options: number | null | undefined, _isInitial?: boolean): object {
    return {};
  }
}

testUIkitDirective({ name: "TestDirective", selector: "uikitTest", type: TestDirective });
