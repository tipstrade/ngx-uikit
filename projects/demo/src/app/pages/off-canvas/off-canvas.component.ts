import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { OffCanvasDirective } from "ngx-uikit";
import { OptionConfig, OptionsComponent } from "../../components/options/options.component";
import { MergePipe } from "../../pipes/merge-pipe";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-off-canvas",
  imports: [CommonModule, OptionsComponent, MergePipe, OffCanvasDirective, DemoTitleComponent],
  templateUrl: "./off-canvas.component.html",
  styleUrl: "./off-canvas.component.scss",
})
export class OffCanvasComponent {
  public readonly config = [
    { name: "mode", type: "radio", defaultValue: "slide", label: "Mode", values: ["slide", "reveal", "push", "none"] },
    { name: "flip", type: "checkbox", defaultValue: false, label: "Flip" },
  ] satisfies OptionConfig[];
}
