import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { LightboxDirective } from "ngx-uikit";

@Component({
  selector: "app-lightbox",
  imports: [CommonModule, LightboxDirective],
  templateUrl: "./lightbox.component.html",
  styleUrl: "./lightbox.component.scss",
})
export class LightboxComponent {
}
