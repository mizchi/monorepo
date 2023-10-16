import { Grid, GridItem, SubGrid } from "./layout";

export default function App() {
  return (
    <>
      <h1>Hello react</h1>
      <Grid
        rows={["32px", "1fr", "1fr", "1fr", "1fr"]}
        columns={5}
        style={{ width: "30vw", height: "30vh", gap: "10px" }}
      >
        <GridItem area={[0, 0, 5, 1]} style={{ backgroundColor: "wheat" }}>
          header
        </GridItem>
        <SubGrid area={[1, 1, 4, 4]} style={{ backgroundColor: "#ddd" }}>
          <GridItem area={[0, 0, 1, 1]} style={{ backgroundColor: "wheat" }}>
            0-0/1-1
          </GridItem>
          <GridItem area={[1, 1, 2, 2]} style={{ backgroundColor: "wheat" }}>
            1-1/2-2
          </GridItem>
        </SubGrid>
      </Grid>
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
