import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { HeightPlaceholderDirective, InverseDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-height-placeholder",
  imports: [CommonModule, HeightPlaceholderDirective, InverseDirective, DemoTitleComponent],
  templateUrl: "./height-placeholder.component.html",
  styleUrl: "./height-placeholder.component.scss",
})
export class HeightPlaceholderComponent {
}
