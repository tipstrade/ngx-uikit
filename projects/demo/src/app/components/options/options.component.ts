import { CommonModule } from "@angular/common";
import { Component, inject, Input, OnChanges, Pipe, PipeTransform, SimpleChanges } from "@angular/core";
import { ReactiveFormsModule, UntypedFormBuilder } from "@angular/forms";
import { debounceTime, filter } from "rxjs";

export type OptionConfig = { name: string, label: string } & (
  { type: "checkbox", defaultValue: boolean } |
  { type: "textbox" | "textarea", defaultValue: string, placeholder?: string } |
  { type: "radio" | "select", defaultValue: unknown, values: unknown[], placeholder?: string } |
  { type: "number", defaultValue: number | null, min?: number, max?: number, step?: number, placeholder?: string }
);

@Pipe({
  name: "value",
})
export class ValuePipe implements PipeTransform {
  transform(value: unknown): string {
    if (value === null) {
      return "[null]";
    }
    else if (value === undefined) {
      return "[undefined]";
    }

    return `${value}`;
  }
}

@Component({
  selector: "app-options",
  imports: [CommonModule, ReactiveFormsModule, ValuePipe],
  templateUrl: "./options.component.html",
  styleUrl: "./options.component.scss",
})
export class OptionsComponent implements OnChanges {
  private readonly formBuilder = inject(UntypedFormBuilder);

  public readonly form = this.formBuilder.group({});

  public readonly values$ = this.form.valueChanges.pipe(debounceTime(150), filter(x => !!Object.keys(x).length));

  @Input()
  public config?: OptionConfig[];

  ngOnChanges(changes: SimpleChanges): void {
    if ("config" in changes) {
      this.buildForm();
    }
  }

  private clearForm(): void {
    Object.keys(this.form.controls).forEach(k => this.form.removeControl(k));
  }

  private buildForm(): void {
    this.clearForm();

    if (!this.config) {
      return;
    }

    this.config.forEach((x) => {
      this.form.addControl(x.name, this.formBuilder.control(x.defaultValue));
    });

    queueMicrotask(() => {
      this.form.markAsPristine();
      this.form.markAsUntouched();
      this.form.updateValueAndValidity();
    });
  }
}
