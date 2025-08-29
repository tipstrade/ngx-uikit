import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { SlidenavDirective } from "./slidenav.directive";

testUIkitDirective({
  name: "SlidenavDirective",
  selector: "uikitSlidenav",
  type: SlidenavDirective,
  expectedOptions: [
    ["", { direction: "next" }],
    ["next", { direction: "next" }],
    ["previous", { direction: "previous" }],
  ],
});
