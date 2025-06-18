import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { FormCustomDirective } from "./form-custom.directive";

testUIkitDirective({
  name: "FormCustomDirective",
  selector: "uikitFormCustom",
  type: FormCustomDirective,
  expectedOptions: [
    [true, { target: true }],
    ["true", { target: true }],
    [false, { target: false }],
    ["false", { target: false }],
    [">", { target: ">" }],
  ],
});
