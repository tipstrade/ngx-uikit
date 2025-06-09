import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { TooltipDirective } from "./tooltip.directive";

testUIkitDirective({
  name: "TooltipDirective",
  selector: "uikitTooltip",
  type: TooltipDirective,
  expectedOptions: [["My Tooltip", { title: "My Tooltip" }]],
});
