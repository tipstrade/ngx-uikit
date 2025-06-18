import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GridDirective } from "ngx-uikit";

@Component({
  selector: "app-index",
  imports: [
    CommonModule,
    RouterModule,
    GridDirective,
  ],
  templateUrl: "./index.component.html",
  styleUrl: "./index.component.scss",
})
export class IndexComponent {

}
