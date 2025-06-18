import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { GridDirective, HeightMatchDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";
import { OptionConfig, OptionsComponent } from "../../components/options/options.component";

@Component({
  selector: "app-height-match",
  imports: [CommonModule, GridDirective, HeightMatchDirective, OptionsComponent, DemoTitleComponent],
  templateUrl: "./height-match.component.html",
  styleUrl: "./height-match.component.scss",
})
export class HeightMatchComponent {
  public readonly config = [
    { name: "target", type: "textbox", defaultValue: "> div > .uk-card", label: "Target" },
  ] satisfies OptionConfig[];
}
