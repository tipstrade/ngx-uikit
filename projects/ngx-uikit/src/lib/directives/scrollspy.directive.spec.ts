import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { ScrollspyDirective } from "./scrollspy.directive";

testUIkitDirective({
  name: "ScrollspyDirective",
  selector: "uikitScrollspy",
  type: ScrollspyDirective,
  expectedOptions: [[".my-class", { cls: ".my-class" }]],
});
