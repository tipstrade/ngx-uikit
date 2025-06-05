import { FormControl } from "@angular/forms";

export type FormValues<T> = {
  [P in keyof T]-?: FormControl<T[P]>
};

export type RequiredFormValues<T> = {
  [P in keyof T]-?: FormControl<NonNullable<T[P]>>
};
