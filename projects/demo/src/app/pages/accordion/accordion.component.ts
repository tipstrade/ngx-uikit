import { CommonModule } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { AccordionDirective } from "../../../../../ngx-uikit/src/public-api";

@Component({
  selector: "app-accordion",
  imports: [CommonModule, AccordionDirective],
  templateUrl: "./accordion.component.html",
  styleUrl: "./accordion.component.scss",
})
export class AccordionComponent {
  @ViewChild(AccordionDirective)
  private accordion?: AccordionDirective;

  public onCollapseAllClick(animate: boolean): void {
    this.accordion?.collapseAll(animate);
  }
}
