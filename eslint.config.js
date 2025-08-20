import defineConfig from "@antfu/eslint-config";

export default defineConfig(
  {
    vue: true,
    typescript: true,
    formatters: true,
    unocss: true,
    stylistic: {
      semi: true,
      quotes: "double",
    },
  },
  {
    rules: {
      "no-console": ["error", { allow: ["warn", "error", "debug"] }],
      "curly": ["error", "multi-line"],
      "style/operator-linebreak": ["error", "after", { overrides: { "?": "before", ":": "before" } }],
    },
  },
  {
    files: ["**/*.test.ts", "**/*.test-d.ts"],
    rules: {
      "no-new-wrappers": "off",
      "unicorn/new-for-builtins": "off",
    },
  },
);
