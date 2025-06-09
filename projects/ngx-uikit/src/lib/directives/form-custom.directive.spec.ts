import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { FormCustomDirective } from "./form-custom.directive";

testUIkitDirective({
  name: "FormCustomDirective",
  selector: "uikitFormCustom",
  type: FormCustomDirective,

});
