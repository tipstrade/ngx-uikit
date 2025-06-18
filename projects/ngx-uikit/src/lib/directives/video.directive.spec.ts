import { testUIkitDirective } from "./_directive-test-helpers.spec";
import { VideoDirective } from "./video.directive";

testUIkitDirective({
  name: "VideoDirective",
  selector: "uikitVideo",
  type: VideoDirective,
  expectedOptions: [
    [true, { autoplay: true }],
    ["true", { autoplay: true }],
    [false, { autoplay: false }],
    ["false", { autoplay: false }],
    ["inview", { autoplay: "inview" }],
  ],
});
