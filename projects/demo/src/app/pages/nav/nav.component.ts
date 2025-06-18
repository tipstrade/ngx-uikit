import { Component } from "@angular/core";
import { NavDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-nav",
  imports: [DemoTitleComponent, NavDirective],
  templateUrl: "./nav.component.html",
  styleUrl: "./nav.component.scss",
})
export class NavComponent {
}
