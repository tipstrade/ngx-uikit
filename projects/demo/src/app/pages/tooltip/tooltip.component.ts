import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TooltipDirective } from "ngx-uikit";
import { OptionConfig, OptionsComponent } from "../../components/options/options.component";
import { MergePipe } from "../../pipes/merge-pipe";

@Component({
  selector: "app-tooltip",
  imports: [CommonModule, OptionsComponent, MergePipe, TooltipDirective],
  templateUrl: "./tooltip.component.html",
  styleUrl: "./tooltip.component.scss",
})
export class TooltipComponent {
  public readonly config = [
    { name: "title", type: "textbox", defaultValue: "My Tooltip", label: "Titlte" },
    { name: "pos", type: "radio", defaultValue: "bottom-left", label: "Position", values: ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "right"] },
  ] satisfies OptionConfig[];
}
