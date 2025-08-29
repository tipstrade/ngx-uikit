import { Component, Type } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { UIkitDirective } from "./_uikit.directive";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DirectiveWithRef<TOptions, TElement> = UIkitDirective<TOptions, TElement> & { set ref(v: any), get ref(): any };

interface TestConfig<T extends UIkitDirective<TOptions, TElement>, TOptions = unknown, TElement = unknown> {
  name: string
  type: Type<T>
  selector?: string
  template?: string
  defaultOptions?: TOptions
  expectedOptions?: [TOptions | string | "" | null | undefined, TOptions & object][]
  otherImports?: Type<unknown>[]
  otherTests?: (getContext: () => DirectiveTestContext<T>) => void
}

export interface DirectiveTestContext<T extends DirectiveWithRef<unknown, unknown>> {
  fixture: ComponentFixture<{ options: T["options"] }>
  directiveInstance: T
};

export const getDirectiveFromFixture = <T>(fixture: ComponentFixture<unknown>, type: Type<T>): T => {
  return fixture.debugElement.query(By.directive(type)).injector.get(type);
};

export const addDestroySpy = (directive: DirectiveWithRef<unknown, unknown>): jasmine.Spy => {
  directive.ref = directive.ref ?? {};
  directive.ref = {
    $destroy: jasmine.createSpy("$destroy"),
  };

  return directive.ref.$destroy;
};

export const createDirectiveFixtureHost = <T extends UIkitDirective<TOptions, unknown>, TOptions>(template: string, type: Type<T>, options: TOptions, otherImports?: Type<unknown>[], detectChanges = true): DirectiveTestContext<T> => {
  @Component({
    template,
    imports: [type, ...otherImports ?? []],
  })
  class TestHostComponent {
    public options: TOptions | "" | null | undefined;
  }

  const fixture = TestBed.configureTestingModule({
    imports: [TestHostComponent],
  }).createComponent(TestHostComponent);

  fixture.componentInstance.options = options;

  if (detectChanges) {
    fixture.detectChanges();
  }

  const directiveInstance = getDirectiveFromFixture(fixture, type);

  return {
    fixture,
    directiveInstance,
  };
};

export const getcreateComponentSpy = (directive: DirectiveWithRef<unknown, unknown>): jasmine.Spy => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return spyOn(directive as any, "createComponent");
};

export function testUIkitDirective<T extends DirectiveWithRef<unknown, unknown>>(config: TestConfig<T> & { template: string }): void;
export function testUIkitDirective<T extends DirectiveWithRef<unknown, unknown>>(config: TestConfig<T> & { selector: string }): void;
export function testUIkitDirective<T extends DirectiveWithRef<unknown, unknown>>(config: TestConfig<T>): void {
  if (!config.name) {
    throw new Error("Directive test needs a name");
  }

  describe(config.name, () => {
    let context: DirectiveTestContext<T>;

    beforeEach(() => {
      context = createDirectiveFixtureHost(config.template ?? `<div [${config.selector}]="options"></div>`, config.type, config.defaultOptions, config.otherImports);
    });

    it("should create an instance", () => {
      expect(context.directiveInstance).toBeTruthy();
    });

    it ("should destroy existing ref when set", () => {
      const destroySpy = addDestroySpy(context.directiveInstance);

      context.directiveInstance.ref = undefined;
      expect(destroySpy).toHaveBeenCalled();
    });

    it ("should return the ref that has been set", () => {
      const mockRef = { $el: null };

      context.directiveInstance.ref = mockRef;
      expect(context.directiveInstance.ref).toEqual(mockRef);
    });

    it ("should have a UIkit element reference", () => {
      expect(context.directiveInstance.ref).toBeTruthy();
    });

    it ("should expect getOptions to return correctly", () => {
      const expectedOptions = [
        [null, undefined],
        [undefined, undefined],
        ["", undefined],
        [{}, {}],
        ...config.expectedOptions ?? [],
      ];

      expectedOptions.forEach(([options, expected]) => {
        context.directiveInstance.options = options;
        expect<unknown>(context.directiveInstance.getOptions()).toEqual(expected);
      });
    });

    it("should call ref.$destroy() on ngOnDestroy", () => {
      const destroySpy = addDestroySpy(context.directiveInstance);

      context.fixture.componentRef.destroy();
      expect(destroySpy).toHaveBeenCalled();
    });

    if (config.otherTests) {
      config.otherTests(() => context);
    }
  });
};
