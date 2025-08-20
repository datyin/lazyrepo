import { fileURLToPath } from "node:url";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Icons from "unplugin-icons/vite";
import TurboConsole from "unplugin-turbo-console/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import Markdown from "unplugin-vue-markdown/vite";
import VueRouter from "unplugin-vue-router/vite";
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
    VueRouter({
      dts: "./src/types/vue-router.d.ts",
    }),
    AutoImport({
      dts: "./src/types/auto-imports.d.ts",
      imports: [
        "vue",
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar",
          ],
        },
      ],
    }),
    Components({
      dts: "./src/types/components.d.ts",
      dirs: [
        "src/components",
        "src/layouts",
      ],
      resolvers: [
        NaiveUiResolver(),
      ],
    }),
    Icons({ compiler: "vue3", autoInstall: true }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
