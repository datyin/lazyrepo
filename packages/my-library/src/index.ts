/* eslint-disable unused-imports/no-unused-vars */

export function myLazyFunction(input: string): string {
  return `Lazy function output: ${input}`;
}

// @ts-expect-error Test
function unused() {
  return "This function is unused";
}
