/**
 * Unit tests for multiply()
 * Loads the compiled multiply.js so window.multiply is available (same as in the browser).
 */
declare global {
  interface Window {
    multiply: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches multiply to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./multiply.js");
});

describe("multiply", () => {
  it("multiplies two positive numbers", () => {
    expect(window.multiply(2, 3)).toBe(6);
  });

  it("multiplies by zero", () => {
    expect(window.multiply(5, 0)).toBe(0);
  });

  it("handles negative numbers", () => {
    expect(window.multiply(-2, 3)).toBe(-6);
    expect(window.multiply(-2, -3)).toBe(6);
  });
});

export {};