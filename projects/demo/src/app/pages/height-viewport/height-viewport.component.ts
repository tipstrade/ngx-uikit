import { Component } from "@angular/core";
import { GridDirective, HeightViewportDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-height-viewport",
  imports: [DemoTitleComponent, GridDirective, HeightViewportDirective],
  templateUrl: "./height-viewport.component.html",
  styleUrl: "./height-viewport.component.scss",
})
export class HeightViewportComponent {
}
