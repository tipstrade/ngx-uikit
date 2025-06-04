import { NgModule } from "@angular/core";
import { SwitcherDirective } from "../public-api";
import { AccordionDirective } from "./directives/accordion.directive";

@NgModule({
  imports: [
    AccordionDirective,
    SwitcherDirective,
  ],
  exports: [
    SwitcherDirective,
    AccordionDirective,
  ],
})
export class UikitModule { }
