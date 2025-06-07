import type * as UIkitNS from "uikit";

// Export the UIkit namespace.
// For reasons that a pretty much beyond me
declare global {
  const UIkit: typeof UIkitNS.default;
}
