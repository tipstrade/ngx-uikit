import { Component } from "@angular/core";
import { SwitcherDirective } from "../../../ngx-uikit/src/public-api";

@Component({
  selector: "app-root",
  imports: [
    SwitcherDirective,
  ],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class AppComponent {
  protected title = "demo";
}
