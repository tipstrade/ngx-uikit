import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { SwitcherDirective } from "./switcher.directive";

testUIkitDirective({ name: "SwitcherDirective", selector: "uikitSwitcher", type: SwitcherDirective, defaultOptions: "~.uk-switcher" });
