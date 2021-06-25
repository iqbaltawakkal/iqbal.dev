import App from "./App.vue";
import "@/assets/tailwind.css";
import { ViteSSG } from "vite-ssg";
import routes from "virtual:generated-pages";

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
  }
);
