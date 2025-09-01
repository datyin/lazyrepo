import { fileURLToPath } from "node:url";
import UnoCSS from "unocss/vite";
import Icons from "unplugin-icons/vite";
import TurboConsole from "unplugin-turbo-console/vite";
import Markdown from "unplugin-vue-markdown/vite";
import Vue from "unplugin-vue/vite";
import { defineConfig } from "vite";
import VueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  plugins: [
    TurboConsole(),
    VueDevTools(),
    UnoCSS(),
    Vue({ include: [/\.vue$/, /\.md$/] }),
    Markdown({}),
    Icons({ compiler: "vue3", autoInstall: true }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  define: {
    "import.meta.env.VITE_BUILD_DATE": JSON.stringify(new Date().toISOString()),
  },
});
