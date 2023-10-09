import { css } from "../../styled-system/css";
import { ButtonExample } from "./Button";

export default function App() {
  return (
    <>
      <div className={css({ padding: 8 })}>
        <h1>Hello</h1>
        <div>
          <ButtonExample onClick={() => console.log("clicked")}>
            Button
          </ButtonExample>
        </div>
      </div>
    </>
  );
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  const { renderToString } = await import("react-dom/server");
  test("render", () => {
    expect(renderToString(<App />)).includes("<h1>Hello</h1>");
  });
}
