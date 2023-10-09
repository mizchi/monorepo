export default function App() {
  return (
    <>
      <h1>Hello react+tailwind</h1>
      <span className="bg-red-600 text-blue-300">text</span>
    </>
  );
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  const { renderToString } = await import("react-dom/server");
  test("render", () => {
    expect(renderToString(<App />)).contain("Hello react+tailwind");
  });
}
