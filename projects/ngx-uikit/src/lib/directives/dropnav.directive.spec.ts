import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { DropnavDirective } from "./dropnav.directive";

const template = `<ul uikitDropnav>
    <li>
        <a href=""></a>
        <div class="uk-dropdown">
            <ul class="uk-nav uk-dropdown-nav">…</ul>
        </div>
    </li>
</ul>`;

testUIkitDirective({
  name: "DropnavDirective",
  template, type: DropnavDirective,
  expectedOptions: [[{}, {}]],
});
