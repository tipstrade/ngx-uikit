import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { DropdownDirective } from "./dropdown.directive";

const template = `<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Hover</button>
    <div uikitDropdown>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
</div>

<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Click</button>
    <div [uikitDropdown]="options">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
</div>`;

testUIkitDirective({
  name: "DropdownDirective",
  template, type: DropdownDirective,
  expectedOptions: [[{}, {}]],
});
