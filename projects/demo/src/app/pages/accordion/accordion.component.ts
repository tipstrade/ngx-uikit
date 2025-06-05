import { CommonModule } from "@angular/common";
import { Component, inject, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import UIkit from "uikit";
import { AccordionDirective } from "../../../../../ngx-uikit/src/public-api";
import { FormOption, OptionsComponent } from "../../components/options/options.component";
import { RequiredFormValues } from "../../core/helpers";

@Component({
  selector: "app-accordion",
  imports: [CommonModule, ReactiveFormsModule, AccordionDirective, OptionsComponent],
  templateUrl: "./accordion.component.html",
  styleUrl: "./accordion.component.scss",
})
export class AccordionComponent {
  public readonly form = this.buildForm();

  public readonly config = [
    { name: "multiple", type: "checkbox", defaultValue: false, label: "Multiple" },
    { name: "animation", type: "checkbox", defaultValue: true, label: "Animated" },
  ] satisfies FormOption[];

  @ViewChild(AccordionDirective)
  private accordion?: AccordionDirective;

  private buildForm(): FormGroup<RequiredFormValues<Pick<UIkit.UIkitAccordionOptions, "animation" | "multiple">>> {
    const fb = inject(FormBuilder).nonNullable;

    return fb.group({
      animation: fb.control<boolean>(true),
      multiple: fb.control<boolean>(false),
    });
  }

  public onCollapseAllClick(animate: boolean): void {
    this.accordion?.collapseAll(animate);
  }
}
