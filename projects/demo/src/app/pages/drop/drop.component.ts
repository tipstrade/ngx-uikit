import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { DropDirective } from "../../../../../ngx-uikit/src/public-api";
import { OptionConfig, OptionsComponent } from "../../components/options/options.component";
import { MergePipe } from "../../pipes/merge-pipe";

@Component({
  selector: "app-drop",
  imports: [CommonModule, OptionsComponent, MergePipe, DropDirective],
  templateUrl: "./drop.component.html",
  styleUrl: "./drop.component.scss",
})
export class DropComponent {
  public readonly config = [
    { name: "pos", type: "select", defaultValue: "bottom-left", label: "Position", values: [null, "top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right", "left-top", "left-center", "left-bottom", "right-top", "right-center", "right-bottom"] },
    { name: "mode", type: "select", defaultValue: "click,hover", label: "Mode", values: ["click,hover", "click", "hover"] },
    { name: "animateOut", type: "checkbox", defaultValue: false, label: "Animate Out" },
    { name: "duration", type: "number", defaultValue: 200, label: "Duration", min: 0, step: 50 },
  ] satisfies OptionConfig[];
}
