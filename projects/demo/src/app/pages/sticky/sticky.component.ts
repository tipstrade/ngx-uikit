import { Component } from "@angular/core";
import { StickyDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-sticky",
  imports: [DemoTitleComponent, StickyDirective],
  templateUrl: "./sticky.component.html",
  styleUrl: "./sticky.component.scss",
})
export class StickyComponent {
}
