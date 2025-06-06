import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { OptionConfig, OptionsComponent } from "../../components/options/options.component";

@Component({
  selector: "app-dropnav",
  imports: [CommonModule, OptionsComponent],
  templateUrl: "./dropnav.component.html",
  styleUrl: "./dropnav.component.scss",
})
export class DropnavComponent {
  public readonly config = [
    { name: "align", type: "radio", defaultValue: "left", label: "Align", values: ["left", "center", "right"] },
    { name: "mode", type: "select", defaultValue: "click,hover", label: "Mode", values: ["click,hover", "click", "hover"] },
    { name: "animateOut", type: "checkbox", defaultValue: false, label: "Animate Out" },
    { name: "duration", type: "number", defaultValue: 200, label: "Duration", min: 0, step: 50 },
  ] satisfies OptionConfig[];
}
