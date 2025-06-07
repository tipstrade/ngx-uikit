import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { GridDirective } from "ngx-uikit";
import { OptionConfig, OptionsComponent } from "../../components/options/options.component";

@Component({
  selector: "app-grid",
  imports: [CommonModule, OptionsComponent, GridDirective],
  templateUrl: "./grid.component.html",
  styleUrl: "./grid.component.scss",
})
export class GridComponent {
  public readonly config = [
    { name: "parallax", type: "textbox", defaultValue: "0px", label: "Parallax" },
  ] satisfies OptionConfig[];
}
