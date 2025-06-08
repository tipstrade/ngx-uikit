import { inject, Injectable, InjectionToken } from "@angular/core";

export interface UIkitConfig {
  /** An optional flag indicating whether loggin is enabled. */
  logging?: boolean
}

export const UIKIT_CONFIG = new InjectionToken<UIkitConfig>("UIkitConfig");

@Injectable({
  providedIn: "root",
})
export class UikitConfigService {
  private readonly config = inject(UIKIT_CONFIG, { optional: true });

  private id = 0;

  public getId(): number {
    return ++this.id;
  }

  public error(message: string, ...args: unknown[]): void {
    if (this.config?.logging) {
      console.error(`[UIkit]: ${message}`, ...args);
    }
  }

  public log(message: string, ...args: unknown[]): void {
    if (this.config?.logging) {
      console.log(`[UIkit]: ${message}`, ...args);
    }
  }

  public warn(message: string, ...args: unknown[]): void {
    if (this.config?.logging) {
      console.warn(`[UIkit]: ${message}`, ...args);
    }
  }
}
