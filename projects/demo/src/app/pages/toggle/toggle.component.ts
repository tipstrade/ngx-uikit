import { Component } from "@angular/core";
import { ToggleDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-toggle",
  imports: [DemoTitleComponent, ToggleDirective],
  templateUrl: "./toggle.component.html",
  styleUrl: "./toggle.component.scss",
})
export class ToggleComponent {

}
