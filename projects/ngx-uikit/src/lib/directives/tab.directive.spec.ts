import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { TabDirective } from "./tab.directive";

testUIkitDirective({
  name: "TabDirective",
  selector: "uikitTab",
  type: TabDirective,
  expectedOptions: [[{}, {}]],
});
