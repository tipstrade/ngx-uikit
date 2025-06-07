import { Component } from "@angular/core";
import { VideoDirective } from "ngx-uikit";

@Component({
  selector: "app-video",
  imports: [VideoDirective],
  templateUrl: "./video.component.html",
  styleUrl: "./video.component.scss",
})
export class VideoComponent {
}
