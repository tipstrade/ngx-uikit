import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { combineLatest, map } from "rxjs";

export const uikitHelpLink = (name: string): { uikitHelpLink: string } => ({ uikitHelpLink: name });

@Component({
  selector: "app-demo-title",
  imports: [CommonModule],
  templateUrl: "./demo-title.component.html",
  styleUrl: "./demo-title.component.scss",
})
export class DemoTitleComponent {
  // ========================
  // Injected
  // ========================

  private readonly route = inject(ActivatedRoute);

  // ========================
  // Observables
  // ========================

  public readonly helpLink$ = combineLatest([this.route.data, this.route.title]).pipe(
    map(([data, title]) => {
      const link = data["uikitHelpLink"] ?? title;

      return `https://getuikit.com/docs/${link}`;
    }),
  );

  public readonly title$ = this.route.title;
}
