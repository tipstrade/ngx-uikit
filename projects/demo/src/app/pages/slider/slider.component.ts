import { Component } from "@angular/core";
import { SlidenavDirective, SliderDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-slider",
  imports: [DemoTitleComponent, SliderDirective, SlidenavDirective],
  templateUrl: "./slider.component.html",
  styleUrl: "./slider.component.scss",
})
export class SliderComponent {
}
