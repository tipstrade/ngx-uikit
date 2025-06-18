import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CountdownDirective, GridDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";
import { OptionConfig, OptionsComponent } from "../../components/options/options.component";

@Component({
  selector: "app-countdown",
  imports: [CommonModule, OptionsComponent, CountdownDirective, GridDirective, DemoTitleComponent],
  templateUrl: "./countdown.component.html",
  styleUrl: "./countdown.component.scss",
})
export class CountdownComponent {
  public readonly config = [
    { name: "date", type: "textbox", defaultValue: new Date(Date.now() + 86400000).toISOString().substring(0, 10), label: "Date" },
  ] satisfies OptionConfig[];
}
