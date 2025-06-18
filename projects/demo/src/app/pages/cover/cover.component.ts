import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CoverDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-cover",
  imports: [CommonModule, CoverDirective, DemoTitleComponent],
  templateUrl: "./cover.component.html",
  styleUrl: "./cover.component.scss",
})
export class CoverComponent {
}
