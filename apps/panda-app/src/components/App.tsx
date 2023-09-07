import { css } from "../../styled-system/css";
import * as Popover from "@radix-ui/react-popover";

export default function App() {
  return (
    <>
      <h1>Hello</h1>
      <div className={css({ bg: "red.400" })}>text</div>
      <Popover.Root>
        <Popover.Trigger
          className={css({
            padding: "10px 15px",
            border: "1px solid #e5e5e5",
            boxSizing: "border-box",
          })}
        >
          Open
        </Popover.Trigger>
        <Popover.Content
          className={css({
            boxSizing: "border-box",
            borderRadius: "4px",
            padding: "20px",
            width: "260px",
            backgroundColor: "white",
            boxShadow:
              "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
            border: "1px solid #e5e5e5",
          })}
        >
          Content
        </Popover.Content>
      </Popover.Root>
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
