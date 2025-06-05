import { DirectiveTestContext, testUIkitDirective } from "./_directive-test-helpers.spec";
import { DropdownDirective } from "./dropdown.directive";

const template = `<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Hover</button>
    <div uk-dropdown>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
</div>

<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Click</button>
    <div [uikitDropdown]="options">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
</div>`;

testUIkitDirective({ name: "DropdownDirective", template, type: DropdownDirective }, (getContext) => {
  let context: DirectiveTestContext<DropdownDirective>;

  beforeEach(() => {
    context = getContext();
  });

  it("should handle empty string options", () => {
    context.fixture.componentInstance.options = "";
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual("");
  });

  it("should handle string options", () => {
    context.fixture.componentInstance.options = "abc";
    context.fixture.detectChanges();

    expect(context.directiveInstance.options).toEqual("abc");
  });
});
