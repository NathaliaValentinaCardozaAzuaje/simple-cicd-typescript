/**
 * Returns the product of two numbers.
 */
function multiply(a: number, b: number): number {
  return a * b;
}

// Expose to window so the HTML script can call it
(window as any).multiply = multiply;
