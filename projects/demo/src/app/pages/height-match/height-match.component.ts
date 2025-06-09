import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { GridDirective, HeightMatchDirective } from "ngx-uikit";
import { OptionConfig, OptionsComponent } from "../../components/options/options.component";

@Component({
  selector: "app-height-match",
  imports: [CommonModule, GridDirective, HeightMatchDirective, OptionsComponent],
  templateUrl: "./height-match.component.html",
  styleUrl: "./height-match.component.scss",
})
export class HeightMatchComponent {
  public readonly config = [
    { name: "target", type: "textbox", defaultValue: "> div > .uk-card", label: "Target" },
  ] satisfies OptionConfig[];
}
