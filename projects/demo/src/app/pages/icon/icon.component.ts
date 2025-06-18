import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-icon",
  imports: [CommonModule, DemoTitleComponent],
  templateUrl: "./icon.component.html",
  styleUrl: "./icon.component.scss",
})
export class IconComponent {

}
