import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CoverDirective } from "ngx-uikit";

@Component({
  selector: "app-cover",
  imports: [CommonModule, CoverDirective],
  templateUrl: "./cover.component.html",
  styleUrl: "./cover.component.scss",
})
export class CoverComponent {
}
