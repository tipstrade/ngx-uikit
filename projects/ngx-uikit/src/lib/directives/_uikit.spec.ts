import { Component, Type } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DirectiveWithRef = { set ref(v: any), get ref(): any };

interface TestConfig<T extends DirectiveWithRef> {
  name: string
  type: Type<T>
  selector?: string
  template?: string
}

interface DirectiveTestContext<T> {
  fixture: ComponentFixture<unknown>
  directiveInstance: T
  destroySpy: jasmine.Spy
};

export const getDirectiveFromFixture = <T>(fixture: ComponentFixture<unknown>, type: Type<T>): T => {
  return fixture.debugElement.query(By.directive(type)).injector.get(type);
};

export const addDestroySpy = (directive: DirectiveWithRef): jasmine.Spy => {
  directive.ref = directive.ref ?? {};
  directive.ref = {
    $destroy: jasmine.createSpy("$destroy"),
  };

  return directive.ref.$destroy;
};

export const createDirectiveFixtureHost = <T extends DirectiveWithRef>(template: string, type: Type<T>): DirectiveTestContext<T> => {
  @Component({
    template,
    imports: [type],
  })
  class TestHostComponent {}

  const fixture = TestBed.configureTestingModule({
    imports: [TestHostComponent],
  }).createComponent(TestHostComponent);

  fixture.detectChanges();

  const directiveInstance = getDirectiveFromFixture(fixture, type);
  let destroySpy = addDestroySpy(directiveInstance);

  return {
    fixture,
    directiveInstance,
    destroySpy,
  };
};

export function testUIkitDirective<T extends DirectiveWithRef>(config: TestConfig<T> & { template: string }, otherTests?: (getContext: () => DirectiveTestContext<T>) => void): void;
export function testUIkitDirective<T extends DirectiveWithRef>(config: TestConfig<T> & { selector: string }, otherTests?: (getContext: () => DirectiveTestContext<T>) => void): void;
export function testUIkitDirective<T extends DirectiveWithRef>(config: TestConfig<T>, otherTests?: (getContext: () => DirectiveTestContext<T>) => void): void {
  describe(config.name, () => {
    let context: DirectiveTestContext<T>;

    beforeEach(() => {
      context = createDirectiveFixtureHost(config.template ?? `<div ${config.selector}></div>`, config.type);
    });

    it("should create an instance", () => {
      expect(context.directiveInstance).toBeTruthy();
    });

    it ("should destroy existing ref when set", () => {
      context.directiveInstance.ref = undefined;
      expect(context.destroySpy).toHaveBeenCalled();
    });

    it ("should return the ref that has been set", () => {
      const mockRef = { $el: null };

      context.directiveInstance.ref = mockRef;
      expect(context.directiveInstance.ref).toEqual(mockRef);
    });

    it ("should have a UIkit element reference", () => {
      expect(context.directiveInstance.ref).toBeTruthy();
    });

    it("should call ref.$destroy() on ngOnDestroy", () => {
      context.fixture.componentRef.destroy();
      expect(context.destroySpy).toHaveBeenCalled();
    });

    if (otherTests) {
      describe("other tests", () => {
        otherTests(() => context);
      });
    }
  });
};
