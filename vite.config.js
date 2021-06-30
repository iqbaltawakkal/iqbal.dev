import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Components from "vite-plugin-components";
import ViteIcons, { ViteIconsResolver } from "vite-plugin-icons";
import Pages from "vite-plugin-pages";
import Markdown from "vite-plugin-md";
import Prism from "markdown-it-prism";
import LinkAttributes from "markdown-it-link-attributes";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Components({
      customComponentResolvers: ViteIconsResolver(),
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      customLoaderMatcher: (path) => path.endsWith(".md"),
    }),
    ViteIcons(),
    Pages({
      extensions: ["vue", "md"],
    }),
    Markdown({
      wrapperClasses: "prose prose-sm m-auto text-left",
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism);
        md.use(LinkAttributes, {
          pattern: /^https?:\/\//,
          attrs: {
            target: "_blank",
            rel: "noopener",
          },
        });
      },
    }),
  ],
  ssgOptions: {
    script: "async",
    formatting: "minify",
  },
  optimizeDeps: {
    include: ["vue", "vue-router"],
  },
  server: {
    port: 3333,
  },
});
