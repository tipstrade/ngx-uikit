import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { LeaderDirective } from "./leader.directive";

testUIkitDirective({ name: "LeaderDirective",
  selector: "uikitLeader",
  type: LeaderDirective,

});
