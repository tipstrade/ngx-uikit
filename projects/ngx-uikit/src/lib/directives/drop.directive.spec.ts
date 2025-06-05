import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { DropDirective } from "./drop.directive";

const template = `<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Hover, Click</button>
    <div class="uk-card uk-card-body uk-card-default" [uikitDrop]>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
</div>`;

testUIkitDirective({ name: "DropDirective", template, type: DropDirective });
