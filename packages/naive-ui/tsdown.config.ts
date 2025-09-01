import { defineConfig } from "tsdown";
import vue from "unplugin-vue/rolldown";

export default defineConfig([
  {
    entry: "./src/index.ts",
    outDir: "./dist",
    platform: "neutral",
    format: ["esm", "cjs"],
    dts: { vue: true },
    plugins: [
      vue(),
    ],
  },
]);
