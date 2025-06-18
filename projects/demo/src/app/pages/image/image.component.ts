import { Component } from "@angular/core";
import { ImageDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-image",
  imports: [DemoTitleComponent, ImageDirective],
  templateUrl: "./image.component.html",
  styleUrl: "./image.component.scss",
})
export class ImageComponent {

}
