import { Component } from "@angular/core";
import { GridDirective, IconDirective, SortableDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-sortable",
  imports: [DemoTitleComponent, GridDirective, IconDirective, SortableDirective],
  templateUrl: "./sortable.component.html",
  styleUrl: "./sortable.component.scss",
})
export class SortableComponent {

}
