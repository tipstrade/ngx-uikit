import { CommonModule } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { AccordionDirective } from "ngx-uikit";
import { OptionConfig, OptionsComponent } from "../../components/options/options.component";

@Component({
  selector: "app-accordion",
  imports: [CommonModule, AccordionDirective, OptionsComponent],
  templateUrl: "./accordion.component.html",
  styleUrl: "./accordion.component.scss",
})
export class AccordionComponent {
  public readonly config = [
    { name: "multiple", type: "checkbox", defaultValue: false, label: "Multiple" },
    { name: "animation", type: "checkbox", defaultValue: true, label: "Animated" },
    { name: "collapsible", type: "radio", defaultValue: true, label: "Collapsible", values: [true, false, null] },
    { name: "duration", type: "number", defaultValue: 200, min: 0, step: 50, label: "Duration" },
    { name: "transition", type: "textbox", defaultValue: "ease", label: "Transition" },
  ] satisfies OptionConfig[];

  @ViewChild(AccordionDirective)
  private accordion?: AccordionDirective;

  public onCollapseAllClick(animate: boolean): void {
    this.accordion?.collapseAll(animate);
  }
}
