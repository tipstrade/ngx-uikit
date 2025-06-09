import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { GridDirective } from "./grid.directive";

testUIkitDirective({
  name: "GridDirective",
  selector: "uikitGrid",
  type: GridDirective,

});
