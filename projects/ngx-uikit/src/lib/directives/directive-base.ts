import { Directive, ElementRef, OnChanges, SimpleChanges } from "@angular/core";

export type OptionsMap = Map<string, string | number | boolean | undefined>;

@Directive()
export abstract class DirectiveBase<T> implements OnChanges {
  // ========================
  // Properties
  // ========================

  /** The name of the UIkit attribute. */
  public abstract readonly attrName: string;

  /** The value of the UIkit attribute. */
  public get attrValue(): string {
    return this.el.nativeElement.getAttribute(this.attrName) || "";
  }

  /** The directive's native element. */
  public get nativeElement(): HTMLElement {
    return this.el.nativeElement;
  }

  /** The UIkit options. */
  public abstract options: T | string;

  // ========================
  // Lifecycle
  // ========================

  public constructor(
    private el: ElementRef<HTMLElement>,
  ) { }

  ngOnChanges(_changes: SimpleChanges): void {
    const opts = new Map<string, string | number | boolean | undefined>();
    const list: string[] = [];

    this.buildOptionsMap(this.getOptions(), opts);

    opts.forEach((val, key) => {
      if (!val) {
        return;
      } else if (typeof val === "boolean") {
        val = val ? "true" : "false";
      }

      list.push(`${key}:${val}`);
    });

    const newValue = list.join(";");

    if (!newValue || this.attrValue !== newValue) {
      this.el.nativeElement.setAttribute(this.attrName, newValue);
    }
  }

  // ========================
  // Methods
  // ========================

  public abstract buildOptionsMap(options: T, map: OptionsMap): void;

  public abstract getOptions(): T;
}
