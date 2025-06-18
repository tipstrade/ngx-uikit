import { Component } from "@angular/core";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-nav",
  imports: [DemoTitleComponent],
  templateUrl: "./nav.component.html",
  styleUrl: "./nav.component.scss",
})
export class NavComponent {

}
