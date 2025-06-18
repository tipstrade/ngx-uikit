import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", pathMatch: "full", loadComponent: () => import("./pages/index/index.component").then(c => c.IndexComponent) },
      { path: "accordion", loadComponent: () => import("./pages/accordion/accordion.component").then(c => c.AccordionComponent), title: "accordion" },
      { path: "alert", loadComponent: () => import("./pages/alert/alert.component").then(c => c.AlertComponent), title: "alert" },
      { path: "countdown", loadComponent: () => import("./pages/countdown/countdown.component").then(c => c.CountdownComponent), title: "countdown" },
      { path: "cover", loadComponent: () => import("./pages/cover/cover.component").then(c => c.CoverComponent), title: "cover" },
      { path: "drop", loadComponent: () => import("./pages/drop/drop.component").then(c => c.DropComponent), title: "drop" },
      { path: "dropdown", loadComponent: () => import("./pages/dropdown/dropdown.component").then(c => c.DropdownComponent), title: "dropdown" },
      { path: "dropnav", loadComponent: () => import("./pages/dropnav/dropnav.component").then(c => c.DropnavComponent), title: "dropnav" },
      { path: "filter", loadComponent: () => import("./pages/filter/filter.component").then(c => c.FilterComponent), title: "filter" },
      { path: "form-custom", loadComponent: () => import("./pages/form-custom/form-custom.component").then(c => c.FormCustomComponent), title: "form-custom" },
      { path: "grid", loadComponent: () => import("./pages/grid/grid.component").then(c => c.GridComponent), title: "grid" },
      { path: "height-match", loadComponent: () => import("./pages/height-match/height-match.component").then(c => c.HeightMatchComponent), title: "height-match" },
      { path: "height-placeholder", loadComponent: () => import("./pages/height-placeholder/height-placeholder.component").then(c => c.HeightPlaceholderComponent), title: "height-placeholder" },
      { path: "height-viewport", loadComponent: () => import("./pages/height-viewport/height-viewport.component").then(c => c.HeightViewportComponent), title: "height-viewport" },
      { path: "icon", loadComponent: () => import("./pages/icon/icon.component").then(c => c.IconComponent), title: "icon" },
      { path: "image", loadComponent: () => import("./pages/image/image.component").then(c => c.ImageComponent), title: "image" },
      { path: "inverse", loadComponent: () => import("./pages/inverse/inverse.component").then(c => c.InverseComponent), title: "inverse" },
      { path: "leader", loadComponent: () => import("./pages/leader/leader.component").then(c => c.LeaderComponent), title: "leader" },
      { path: "lightbox", loadComponent: () => import("./pages/lightbox/lightbox.component").then(c => c.LightboxComponent), title: "lightbox" },
      { path: "modal", loadComponent: () => import("./pages/modal/modal.component").then(c => c.ModalComponent), title: "modal" },
      { path: "nav", loadComponent: () => import("./pages/nav/nav.component").then(c => c.NavComponent), title: "nav" },
      { path: "navbar", loadComponent: () => import("./pages/navbar/navbar.component").then(c => c.NavbarComponent), title: "navbar" },
      { path: "notification", loadComponent: () => import("./pages/notification/notification.component").then(c => c.NotificationComponent), title: "notification" },
      { path: "off-canvas", loadComponent: () => import("./pages/off-canvas/off-canvas.component").then(c => c.OffCanvasComponent), title: "off-canvas" },
      { path: "parallax", loadComponent: () => import("./pages/parallax/parallax.component").then(c => c.ParallaxComponent), title: "parallax" },
      { path: "scroll", loadComponent: () => import("./pages/scroll/scroll.component").then(c => c.ScrollComponent), title: "scroll" },
      { path: "scrollspy", loadComponent: () => import("./pages/scrollspy/scrollspy.component").then(c => c.ScrollspyComponent), title: "scrollspy" },
      { path: "slider", loadComponent: () => import("./pages/slider/slider.component").then(c => c.SliderComponent), title: "slider" },
      { path: "slideshow", loadComponent: () => import("./pages/slideshow/slideshow.component").then(c => c.SlideshowComponent), title: "slideshow" },
      { path: "sortable", loadComponent: () => import("./pages/sortable/sortable.component").then(c => c.SortableComponent), title: "sortable" },
      { path: "sticky", loadComponent: () => import("./pages/sticky/sticky.component").then(c => c.StickyComponent), title: "sticky" },
      { path: "svg", loadComponent: () => import("./pages/svg/svg.component").then(c => c.SvgComponent), title: "svg" },
      { path: "switcher", loadComponent: () => import("./pages/switcher/switcher.component").then(c => c.SwitcherComponent), title: "switcher" },
      { path: "toggle", loadComponent: () => import("./pages/toggle/toggle.component").then(c => c.ToggleComponent), title: "toggle" },
      { path: "tooltip", loadComponent: () => import("./pages/tooltip/tooltip.component").then(c => c.TooltipComponent), title: "tooltip" },
      { path: "video", loadComponent: () => import("./pages/video/video.component").then(c => c.VideoComponent), title: "video" },
    ],
    resolve: {
      uikitLink: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        let child: ActivatedRouteSnapshot | null = state.root;
        let link: string | undefined;

        while (child) {
          link = child.data["link"] ?? undefined;
          child = child.firstChild;
        }

        return link ?? route.title;
      },
    },
  },
];
