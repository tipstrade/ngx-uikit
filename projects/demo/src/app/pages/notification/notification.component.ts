import { Component } from "@angular/core";
import { DemoTitleComponent } from "../../components/demo-title/demo-title.component";

@Component({
  selector: "app-notification",
  imports: [DemoTitleComponent],
  templateUrl: "./notification.component.html",
  styleUrl: "./notification.component.scss",
})
export class NotificationComponent {
}
