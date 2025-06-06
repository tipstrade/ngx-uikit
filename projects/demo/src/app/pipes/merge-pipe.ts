import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "merge",
})
export class MergePipe implements PipeTransform {
  transform<T, V>(value: T, args: V): T & V {
    return {
      ...value,
      ...args,
    };
  }
}
