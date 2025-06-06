import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NavbarDirective } from "../../../../../ngx-uikit/src/public-api";
import { OptionConfig, OptionsComponent } from "../../components/options/options.component";
import { MergePipe } from "../../pipes/merge-pipe";

@Component({
  selector: "app-navbar",
  imports: [CommonModule, OptionsComponent, MergePipe, NavbarDirective],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  public readonly config = [
    { name: "align", type: "radio", defaultValue: "left", label: "Align", values: ["left", "center", "right"] },
  ] satisfies OptionConfig[];
}
