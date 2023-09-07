export default function add(a: number, b: number) {
  return a + b;
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test("1+2", () => {
    expect(add(1, 2)).toBe(3);
  });
}
