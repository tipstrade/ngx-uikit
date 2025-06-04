export const uikitDestroy = (element: unknown): void => {
  if (!!element && typeof (element) === "object" && "$destroy" in element && typeof element.$destroy === "function") {
    element.$destroy();
  }
};
