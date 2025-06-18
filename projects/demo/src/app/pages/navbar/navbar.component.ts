import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NavbarDirective } from "ngx-uikit";
import { OptionConfig, OptionsComponent } from "../../components/options/options.component";
import { MergePipe } from "../../pipes/merge-pipe";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-navbar",
  imports: [CommonModule, OptionsComponent, MergePipe, NavbarDirective, DemoTitleComponent],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  public readonly config = [
    { name: "align", type: "radio", defaultValue: "left", label: "Align", values: ["left", "center", "right"] },
  ] satisfies OptionConfig[];
}
