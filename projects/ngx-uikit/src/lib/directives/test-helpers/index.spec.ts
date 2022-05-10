import { DirectiveBase } from "../directive-base";

export const setAndTriggerOptions = <T>(directive: DirectiveBase<T>, options: T | string) => {
  directive.options = options;
  directive.ngOnChanges({});
}
