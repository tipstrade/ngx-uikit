import { Component } from "@angular/core";
import { GridDirective, ScrollspyDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-scrollspy",
  imports: [DemoTitleComponent, GridDirective, ScrollspyDirective],
  templateUrl: "./scrollspy.component.html",
  styleUrl: "./scrollspy.component.scss",
})
export class ScrollspyComponent {

}
