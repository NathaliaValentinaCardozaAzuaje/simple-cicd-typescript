/**
 * Returns the subtract of two numbers.
 */
function subtract(a: number, b: number): number {
  return a - b;
}

// Expose to window so the HTML script can call it
(window as any).subtract = subtract;
