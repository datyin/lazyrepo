import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      // matches every folder and file inside the `packages` folder
      "packages/*",
      {
        // add "extends: true" to inherit the options from the root config
        extends: true,
        test: {
          include: ["tests/**/*.{browser}.test.{ts,js}"],
          // it is recommended to define a name when using inline configs
          name: "happy-dom",
          environment: "happy-dom",
        },
      },
      {
        test: {
          include: ["tests/**/*.{node}.test.{ts,js}"],
          // color of the name label can be changed
          name: { label: "node", color: "green" },
          environment: "node",
        },
      },
    ],
  },
});
