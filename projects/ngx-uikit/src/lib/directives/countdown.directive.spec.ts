import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { CountdownDirective } from "./countdown.directive";

testUIkitDirective({ name: "CountdownDirective", selector: "uikitCountdown", type: CountdownDirective });
