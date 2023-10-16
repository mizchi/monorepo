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

import { cn } from "@/lib/utils";
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
    const newClassName = cn("grid", className);
    const gridStyle = {
      ...style,
      ...getGridTemplate(rows, columns, areas),
    };
    return (
      <div {...htmlProps} className={newClassName} style={gridStyle} ref={ref}>
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
  className,
  ...htmlProps
}: GridItemProps) => {
  const [x, y, w, h] = area;
  const gridClassName = cn(
    className,
    "grid-item min-w-0 min-h-0 max-w-full max-h-full w-full h-full",
  );
  const gridItemStyle = {
    ...style,
    gridRowStart: y + 1,
    gridColumnStart: x + 1,
    gridRowEnd: y + h + 1,
    gridColumnEnd: x + w + 1,
  };
  return (
    <div style={gridItemStyle} className={gridClassName} {...htmlProps}>
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
  className,
  ...htmlProps
}: GridAreaItemProps) => {
  const gridClassName = cn(
    className,
    "grid-item min-w-0 min-h-0 max-w-full max-h-full w-full h-full",
  );
  const gridAreaItemStyle = {
    ...style,
    gridArea: area,
  };
  return (
    <div style={gridAreaItemStyle} className={gridClassName} {...htmlProps}>
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
  className,
  ...htmlProps
}: SubGridProps) => {
  const [x, y, w, h] = area;
  const gridClassName = cn(
    className,
    "grid grid-item min-w-0 min-h-0 max-w-full max-h-full w-full h-full",
  );
  const gridStyle = {
    ...style,
    gridRowStart: y + 1,
    gridColumnStart: x + 1,
    gridRowEnd: y + h + 1,
    gridColumnEnd: x + w + 1,
    gridTemplateRows: "subgrid",
    gridTemplateColumns: "subgrid",
  };
  return (
    <div {...htmlProps} className={gridClassName} style={gridStyle}>
      {children}
    </div>
  );
};
