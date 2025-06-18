import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DemoTitleComponent } from "./demo-title.component";

describe("DemoTitleComponent", () => {
  let component: DemoTitleComponent;
  let fixture: ComponentFixture<DemoTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoTitleComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DemoTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
