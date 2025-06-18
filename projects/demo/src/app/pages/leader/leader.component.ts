import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { GridDirective, LeaderDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-leader",
  imports: [CommonModule, GridDirective, LeaderDirective, DemoTitleComponent],
  templateUrl: "./leader.component.html",
  styleUrl: "./leader.component.scss",
})
export class LeaderComponent {
}
