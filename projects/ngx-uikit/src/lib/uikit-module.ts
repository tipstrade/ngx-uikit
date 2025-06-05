import { NgModule } from "@angular/core";
import { AccordionDirective } from "./directives/accordion.directive";
import { SwitcherDirective } from "./directives/switcher.directive";
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
