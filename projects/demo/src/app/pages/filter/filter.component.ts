import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FilterDirective } from "ngx-uikit";
import { OptionConfig, OptionsComponent } from "../../components/options/options.component";
import { MergePipe } from "../../pipes/merge-pipe";

@Component({
  selector: "app-filter",
  imports: [CommonModule, OptionsComponent, MergePipe, FilterDirective],
  templateUrl: "./filter.component.html",
  styleUrl: "./filter.component.scss",
})
export class FilterComponent {
  public readonly config = [
    { name: "animation", type: "radio", defaultValue: "slide", label: "Animation", values: ["slide", "fade", "delayed-fade", false] },
  ] satisfies OptionConfig[];
}
