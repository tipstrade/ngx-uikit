import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NgxUikitComponent } from "./ngx-uikit";

describe("NgxUikitComponent", () => {
  let component: NgxUikitComponent;
  let fixture: ComponentFixture<NgxUikitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxUikitComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NgxUikitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
