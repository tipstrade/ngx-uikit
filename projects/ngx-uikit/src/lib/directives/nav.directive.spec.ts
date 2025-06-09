import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { NavDirective } from "./nav.directive";

testUIkitDirective({
  name: "NavDirective",
  selector: "uikitNav",
  type: NavDirective,
});
