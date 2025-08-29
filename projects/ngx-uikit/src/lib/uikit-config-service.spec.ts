import { TestBed } from "@angular/core/testing";
import UIkit from "uikit";
import { UIKIT_CONFIG, UIkitConfig, UikitConfigService } from "./uikit-config-service";

const configureService = (config: UIkitConfig = {}): UikitConfigService => {
  return TestBed.configureTestingModule({
    providers: [
      UikitConfigService,
      {
        provide: UIKIT_CONFIG, useValue: config,
      },
    ],
  }).inject(UikitConfigService);
};

describe("UikitConfigService", () => {
  it("should be created", () => {
    const service = configureService();
    expect(service).toBeTruthy();
  });

  it("should load plugins provided", () => {
    const pluginSpy = jasmine.createSpy();
    const config: UIkitConfig = {
      plugins: [pluginSpy],
    };

    configureService(config);

    expect(pluginSpy).toHaveBeenCalledWith(UIkit);
  });

  it("should get an id", () => {
    const service = configureService();

    expect(service.getId()).toBe(1);
    expect(service.getId()).toBe(2);
  });

  it ("should install a plugin", () => {
    const service = configureService();
    const pluginSpy = jasmine.createSpy();

    service.loadPlugin(pluginSpy);

    expect(pluginSpy).toHaveBeenCalledWith(UIkit);
  });

  it("should log to console if enabled", () => {
    const service = configureService({ logging: true });
    const spy = spyOn(console, "log");

    service.log("Test", 1);

    expect(spy).toHaveBeenCalledWith("[UIkit]: Test", 1);
  });

  it("should error to console if enabled", () => {
    const service = configureService({ logging: true });
    const spy = spyOn(console, "error");

    service.error("Test", 1);

    expect(spy).toHaveBeenCalledWith("[UIkit]: Test", 1);
  });

  it("should warn to console if enabled", () => {
    const service = configureService({ logging: true });
    const spy = spyOn(console, "warn");

    service.warn("Test", 1);

    expect(spy).toHaveBeenCalledWith("[UIkit]: Test", 1);
  });

  it("should not log to console if not enabled", () => {
    const service = configureService();
    const spy = spyOn(console, "log");

    service.log("Test", 1);

    expect(spy).toHaveBeenCalledTimes(0);
  });
});
