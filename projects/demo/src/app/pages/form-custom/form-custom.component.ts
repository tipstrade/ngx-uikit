import { Component } from "@angular/core";
import { FormCustomDirective } from "ngx-uikit";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-form-custom",
  imports: [DemoTitleComponent, FormCustomDirective],
  templateUrl: "./form-custom.component.html",
  styleUrl: "./form-custom.component.scss",
})
export class FormCustomComponent {

}
