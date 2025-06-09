import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { FilterDirective } from "./filter.directive";

testUIkitDirective({
  name: "FilterDirective",
  selector: "uikitFilter",
  type: FilterDirective,
  expectedOptions: [[{}, {}], [".js-filter", { target: ".js-filter" }]],
});
