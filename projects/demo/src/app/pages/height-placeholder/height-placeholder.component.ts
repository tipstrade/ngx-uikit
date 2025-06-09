import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { HeightPlaceholderDirective, InverseDirective } from "ngx-uikit";

@Component({
  selector: "app-height-placeholder",
  imports: [CommonModule, HeightPlaceholderDirective, InverseDirective],
  templateUrl: "./height-placeholder.component.html",
  styleUrl: "./height-placeholder.component.scss",
})
export class HeightPlaceholderComponent {
}
