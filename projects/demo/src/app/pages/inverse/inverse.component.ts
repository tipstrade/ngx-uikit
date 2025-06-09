import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { GridDirective } from "ngx-uikit";

@Component({
  selector: "app-inverse",
  imports: [CommonModule, GridDirective],
  templateUrl: "./inverse.component.html",
  styleUrl: "./inverse.component.scss",
})
export class InverseComponent {
}
