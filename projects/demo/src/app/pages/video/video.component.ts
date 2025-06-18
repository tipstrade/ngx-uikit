import { Component } from "@angular/core";
import { VideoDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-video",
  imports: [VideoDirective, DemoTitleComponent],
  templateUrl: "./video.component.html",
  styleUrl: "./video.component.scss",
})
export class VideoComponent {
}
