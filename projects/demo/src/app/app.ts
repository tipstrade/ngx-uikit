import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [
    CommonModule, RouterModule,
  ],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class AppComponent {
  // ========================
  // Injected
  // ========================

  // ========================
  // Properties
  // ========================

  public readonly components = [
    "accordion",
    "alert",
    "countdown",
    "cover",
    "drop",
    "dropdown",
    "dropnav",
    "filter",
    "form-custom",
    "grid",
    "height-match",
    "height-placeholder",
    "height-viewport",
    "icon",
    "image",
    "inverse",
    "leader",
    "lightbox",
    "modal",
    "nav",
    "navbar",
    "notification",
    "off-canvas",
    "parallax",
    "scroll",
    "scrollspy",
    "slider",
    "slideshow",
    "sortable",
    "sticky",
    "svg",
    "switcher",
    "toggle",
    "tooltip",
    "upload",
    "video",
  ];

  // ========================
  // Lifecycle
  // ========================
}
