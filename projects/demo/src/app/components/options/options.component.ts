import { CommonModule } from "@angular/common";
import { Component, inject, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ReactiveFormsModule, UntypedFormBuilder } from "@angular/forms";
import { startWith } from "rxjs";

export interface FormOption {
  name: string
  label: string
  type: "text" | "checkbox"
  defaultValue: unknown
}

@Component({
  selector: "app-options",
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./options.component.html",
  styleUrl: "./options.component.scss",
})
export class OptionsComponent implements OnChanges {
  private readonly formBuilder = inject(UntypedFormBuilder);

  public readonly form = this.formBuilder.group({});

  public readonly values$ = this.form.valueChanges.pipe(startWith(this.form.value));

  @Input()
  public options?: FormOption[];

  ngOnChanges(changes: SimpleChanges): void {
    if ("options" in changes) {
      this.buildForm();
    }
  }

  private clearForm(): void {
    Object.keys(this.form.controls).forEach(k => this.form.removeControl(k));
  }

  private buildForm(): void {
    this.clearForm();

    if (!this.options) {
      return;
    }

    this.options.forEach((x) => {
      this.form.addControl(x.name, this.formBuilder.control(x.defaultValue));
    });

    this.form.markAsPristine();
    this.form.markAsUntouched();
    this.form.updateValueAndValidity();
  }
}
