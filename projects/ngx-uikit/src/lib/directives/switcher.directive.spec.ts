import { ElementRef } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { setAndTriggerOptions } from "./test-helpers/index.spec";
import { SwitcherDirective } from "./switcher.directive";

describe("SwitcherDirective", () => {
  let directive: SwitcherDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef, useClass: MockElementRef },
      ],
    }).compileComponents();

    directive = new SwitcherDirective(
      TestBed.inject(ElementRef),
    );
  });

  it("should create an instance", () => {
    expect(directive).toBeTruthy();
  });

  it("has the correct uk-switcher attribute", () => {
    directive.ngOnChanges({});

    expect(directive.nativeElement.hasAttribute("uk-switcher")).toBeTrue();
  });

  it("has the correct attribute values", () => {
    setAndTriggerOptions(directive, {
      toggle: "> *",
      active: 1,
    });

    expect(directive.attrValue).toContain("toggle:> *");
    expect(directive.attrValue).toContain("active:1");
  });
});

class MockElementRef extends ElementRef<HTMLElement>{
  constructor() { super(document.createElement("a")) }
}
