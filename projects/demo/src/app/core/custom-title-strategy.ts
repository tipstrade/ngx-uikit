import { TitleCasePipe } from "@angular/common";
import { inject, Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRouteSnapshot, RouterStateSnapshot, TitleStrategy } from "@angular/router";

@Injectable({ providedIn: "root" })
export class CustomTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const titleCase = new TitleCasePipe();

    let title: string | undefined;
    let child: ActivatedRouteSnapshot | null = snapshot.root;

    while (child) {
      title = child.title;

      child = child.firstChild;
    }

    if (title) {
      this.title.setTitle(`${titleCase.transform(title)} | UIkit Demo`);
    }
    else {
      this.title.setTitle("UIkit Demo");
    }
  }
}
