import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { GridDirective, LeaderDirective } from "ngx-uikit";

@Component({
  selector: "app-leader",
  imports: [CommonModule, GridDirective, LeaderDirective],
  templateUrl: "./leader.component.html",
  styleUrl: "./leader.component.scss",
})
export class LeaderComponent {
}
