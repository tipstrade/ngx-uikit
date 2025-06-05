import { NgModule } from "@angular/core";
import { SwitcherDirective } from "../public-api";
import { AccordionDirective } from "./directives/accordion.directive";
import { TooltipDirective } from "./directives/tooltip.directive";

@NgModule({
  imports: [
    AccordionDirective,
    SwitcherDirective,
    TooltipDirective,
  ],
  exports: [
    SwitcherDirective,
    AccordionDirective,
    TooltipDirective,
  ],
})
export class UIkitModule { }
