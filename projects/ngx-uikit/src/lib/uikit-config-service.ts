import { inject, Injectable, InjectionToken } from "@angular/core";
import type UIkitNS from "uikit";

export interface UIkitConfig {
  /** An optional flag indicating whether loggin is enabled. */
  logging?: boolean
  plugins?: ((uikit: typeof UIkitNS) => void)[]
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

  // ========================
  // Lifecycle
  // ========================

  constructor() {
    if (this.config?.plugins) {
      this.config.plugins.forEach(p => this.loadPlugin(p));
    }
  }

  // ========================
  // Plugins
  // ========================

  public loadPlugin(plugin: (uikit: typeof UIkitNS) => void): void {
    UIkit.use(plugin);
  }

  // ========================
  // Logging
  // ========================

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
