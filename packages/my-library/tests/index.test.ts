import { describe, expect, it } from "vitest";
import { myLazyFunction } from "../src/index.ts";

describe("myLazyFunction", () => {
  const cases: [unknown, string][] = [
    ["Nerd!", "Lazy function output: Nerd!"],
  ];

  it.each(cases)("myLazyFunction(%s) -> %s", (input, expected) => {
    const results = myLazyFunction(input as any);
    expect(results).toStrictEqual(expected);
  });
});
