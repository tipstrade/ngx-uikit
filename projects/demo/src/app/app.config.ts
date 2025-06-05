import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from "@angular/core";
import { provideRouter, TitleStrategy } from "@angular/router";

import { routes } from "./app.routes";
import { CustomTitleStrategy } from "./core/custom-title-strategy";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: TitleStrategy, useClass: CustomTitleStrategy },
  ],
};
