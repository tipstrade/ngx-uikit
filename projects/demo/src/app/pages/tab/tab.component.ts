import { Component } from "@angular/core";
import { TabDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-tab",
  imports: [DemoTitleComponent, TabDirective],
  templateUrl: "./tab.component.html",
  styleUrl: "./tab.component.scss",
})
export class TabComponent {
}
