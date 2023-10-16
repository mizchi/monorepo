/*
Grid css layout utilities for [x, y, w, h] grid areas.

Example:

export default function App() {
  return (
    <>
      <Grid
        rows={["32px", "1fr", "1fr", "1fr", "1fr"]}
        columns={5}
        style={{ width: "100vw", height: "100vh", gap: "10px" }}
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
*/

// import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type GridProps = {
  rows: number | Array<string | number>;
  columns: number | Array<string | number>;
  areas?: Array<string[]>;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * A grid container with a fixed number of rows and columns.
 * @param rows - The number of rows or an array of row sizes.
 * @param columns - The number of columns or an array of column sizes.
 * @param children - The grid items.
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      rows,
      areas,
      columns,
      children,
      style,
      className,
      ...htmlProps
    }: GridProps,
    ref,
  ) => {
    const gridStyle = {
      display: "grid",
      ...style,
      ...getGridTemplate(rows, columns, areas),
    };
    return (
      <div {...htmlProps} style={gridStyle} ref={ref}>
        {children}
      </div>
    );
  },
);

export function getGridTemplate(
  rows: number | Array<string | number>,
  columns: number | Array<string | number>,
  areas?: Array<string[]>,
) {
  return {
    gridTemplateRows:
      typeof rows === "number" ? `repeat(${rows}, 1fr)` : rows.join(" "),
    gridTemplateColumns:
      typeof columns === "number"
        ? `repeat(${columns}, 1fr)`
        : columns.join(" "),
    gridTemplateAreas: areas
      ? areas.map((a) => `'${a.join(" ")}'`).join(" ")
      : undefined,
  };
}

/**
 * A grid container with a fixed number of rows and columns.
 * @param rows - The number of rows or an array of row sizes.
 * @param columns - The number of columns or an array of column sizes.
 * @param children - The grid items.
 */

type GridItemProps = {
  area: [x: number, y: number, w: number, h: number];
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * A grid container with a fixed number of rows and columns.
 * @param area - [x, y, w, h]
 * @param columns - The number of columns or an array of column sizes.
 * @param children - The grid items.
 */
export const GridItem = ({
  area,
  style,
  children,
  ...htmlProps
}: GridItemProps) => {
  const [x, y, w, h] = area;
  const gridItemStyle = {
    display: "grid",
    minWidth: 0,
    minHeight: 0,
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    height: "100%",
    ...style,
    gridRowStart: y + 1,
    gridColumnStart: x + 1,
    gridRowEnd: y + h + 1,
    gridColumnEnd: x + w + 1,
  };
  return (
    <div style={gridItemStyle} {...htmlProps}>
      {children}
    </div>
  );
};

type GridAreaItemProps = {
  area: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const GridAreaItem = ({
  area,
  style,
  children,
  ...htmlProps
}: GridAreaItemProps) => {
  const gridAreaItemStyle = {
    display: "grid",
    minWidth: 0,
    minHeight: 0,
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    height: "100%",
    ...style,
    gridArea: area,
  };
  return (
    <div style={gridAreaItemStyle} {...htmlProps}>
      {children}
    </div>
  );
};

type SubGridProps = {
  area: [x: number, y: number, w: number, h: number];
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * A subgrid container with a fixed number of rows and columns.
 * @param area - [x, y, w, h]
 * @param columns - The number of columns or an array of column sizes.
 * @param children - The grid items.
 */
export const SubGrid = ({
  area,
  children,
  style,
  ...htmlProps
}: SubGridProps) => {
  const [x, y, w, h] = area;
  const gridStyle = {
    display: "grid",
    minWidth: 0,
    minHeight: 0,
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    height: "100%",
    ...style,
    gridRowStart: y + 1,
    gridColumnStart: x + 1,
    gridRowEnd: y + h + 1,
    gridColumnEnd: x + w + 1,
    gridTemplateRows: "subgrid",
    gridTemplateColumns: "subgrid",
  };
  return (
    <div {...htmlProps} style={gridStyle}>
      {children}
    </div>
  );
};
