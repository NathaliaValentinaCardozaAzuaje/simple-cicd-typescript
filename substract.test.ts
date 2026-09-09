/**
 * Unit tests for substract()
 * Loads the compiled substract.js so window.substract is available (same as in the browser).
 */
declare global {
  interface Window {
    substract: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches substract to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./substract.js");
});

describe("substract", () => {
  it("subtracts two positive numbers", () => {
    expect(window.substract(5, 3)).toBe(2);
  });

  it("handles negative numbers", () => {
    expect(window.substract(-1, -1)).toBe(0);
    expect(window.substract(-1, 1)).toBe(-2);
  });

  it("returns 0 when both numbers are equal", () => {
    expect(window.substract(4, 4)).toBe(0);
  });
});

export {};