import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ModalDirective } from "ngx-uikit";
import { OptionConfig, OptionsComponent } from "../../components/options/options.component";
import { MergePipe } from "../../pipes/merge-pipe";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-modal",
  imports: [CommonModule, MergePipe, ModalDirective, OptionsComponent, DemoTitleComponent],
  templateUrl: "./modal.component.html",
  styleUrl: "./modal.component.scss",
})
export class ModalComponent {
  public readonly config = [
    { name: "bgClose", type: "checkbox", defaultValue: true, label: "bgClose" },
  ] satisfies OptionConfig[];
}
