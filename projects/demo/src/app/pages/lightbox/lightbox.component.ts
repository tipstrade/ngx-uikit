import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { LightboxDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-lightbox",
  imports: [CommonModule, LightboxDirective, DemoTitleComponent],
  templateUrl: "./lightbox.component.html",
  styleUrl: "./lightbox.component.scss",
})
export class LightboxComponent {
}
