import { Component } from "@angular/core";
import { CoverDirective, SlidenavDirective, SlideshowDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-slideshow",
  imports: [
    DemoTitleComponent,
    CoverDirective, SlideshowDirective, SlidenavDirective,
  ],
  templateUrl: "./slideshow.component.html",
  styleUrl: "./slideshow.component.scss",
})
export class SlideshowComponent {

}
