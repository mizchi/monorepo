export default function App() {
  return (
    <>
      <h1>Hello react</h1>
    </>
  );
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  const { renderToString } = await import("react-dom/server");
  test("render", () => {
    expect(renderToString(<App />)).toBe("<h1>Hello react</h1>");
  });
}
