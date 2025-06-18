import { Component } from "@angular/core";
import { GridDirective, SwitcherDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-switcher",
  imports: [DemoTitleComponent, GridDirective, SwitcherDirective],
  templateUrl: "./switcher.component.html",
  styleUrl: "./switcher.component.scss",
})
export class SwitcherComponent {

}
