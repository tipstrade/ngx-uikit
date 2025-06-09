import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { ModalDirective } from "./modal.directive";

testUIkitDirective({
  name: "ModalDirective",
  selector: "uikitModal",
  type: ModalDirective,

});
