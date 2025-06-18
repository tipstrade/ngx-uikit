import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { GridDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-inverse",
  imports: [CommonModule, GridDirective, DemoTitleComponent],
  templateUrl: "./inverse.component.html",
  styleUrl: "./inverse.component.scss",
})
export class InverseComponent {
}
