import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AlertDirective } from "ngx-uikit";
import { OptionConfig, OptionsComponent } from "../../components/options/options.component";

@Component({
  selector: "app-alert",
  imports: [CommonModule, OptionsComponent, AlertDirective],
  templateUrl: "./alert.component.html",
  styleUrl: "./alert.component.scss",
})
export class AlertComponent {
  public readonly config = [
    { name: "animation", type: "checkbox", defaultValue: true, label: "Animation" },
    { name: "duration", type: "number", defaultValue: 150, label: "Duration", min: 0, step: 50 },

  ] satisfies OptionConfig[];
}
