import { Component } from "@angular/core";
import { ParallaxDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-parallax",
  imports: [DemoTitleComponent, ParallaxDirective],
  templateUrl: "./parallax.component.html",
  styleUrl: "./parallax.component.scss",
})
export class ParallaxComponent {
}
