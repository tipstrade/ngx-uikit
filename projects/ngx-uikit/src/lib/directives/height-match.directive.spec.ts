import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { HeightMatchDirective } from "./height-match.directive";

testUIkitDirective({
  name: "HeightMatchDirective",
  selector: "uikitHeightMatch",
  type: HeightMatchDirective,
  expectedOptions: [[".my-class", { target: ".my-class" }]],
});
