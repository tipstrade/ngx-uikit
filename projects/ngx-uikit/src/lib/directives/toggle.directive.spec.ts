import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { ToggleDirective } from "./toggle.directive";

testUIkitDirective({
  name: "ToggleDirective",
  selector: "uikitToggle",
  type: ToggleDirective,
  expectedOptions: [[".toggle-target", { target: ".toggle-target" }]],
});
