import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { DropParentIconDirective } from "./drop-parent-icon.directive";

const template = `<ul ukikitDropnav>
    <li>
        <a href="">Parent <span uikitDropParentIcon></span></a>
        <div class="uk-dropdown">…</div>
    </li>
</ul>`;

testUIkitDirective({
  name: "DropParentIconDirective",
  template,
  type: DropParentIconDirective,
});
