import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { OffCanvasDirective } from "./off-canvas.directive";

testUIkitDirective({
  name: "OffCanvasDirective",
  selector: "uikitOffCanvas",
  type: OffCanvasDirective,
  expectedOptions: [],
});
