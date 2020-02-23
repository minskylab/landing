import { JustifyItems, AlignItems, JustifyContent, GridAutoFlow, JustifySelf, AlignSelf, AlignContent } from "./types";
import { GridBreakpoints } from "./breakpoints";

export type GridType = "block" | "flex" | "grid" | "none";

export type Size = string;
export type Unit = number;

export interface GridPosition {
    from?: Unit;
    to?: Unit;
    how?: Unit;
    raw?: string;
}

// type Position = GridPosition | string;

export interface GridTemplate {
    parts?: Unit; // how: 3, 6, 12...
    size?: Size; // px, fr, em, rem, etc
    raw?: string;
}

export interface Envelope {
    top?: Size;
    right?: Size;
    bottom?: Size;
    left?: Size;
    all?: Size;
    x?: Size;
    y?: Size;
}

export interface GridProps {
    // type
    type?: GridType | GridType[];

    // templates
    columnsTemplate?: GridTemplate | GridTemplate[];
    rowsTemplate?: GridTemplate | GridTemplate[];

    // posititon
    rows?: GridPosition | GridPosition[];
    cols?: GridPosition | GridPosition[];

    // gaps
    rowGap?: Size | Size[];
    columnGap?: Size | Size[];

    // alignment
    justifyItems?: JustifyItems | JustifyItems[];
    alignItems?: AlignItems | AlignItems[];

    justifyContent?: JustifyContent | JustifyContent[];
    alignContent?: AlignContent | AlignContent[];

    justifySelf?: JustifySelf | JustifySelf[];
    alignSelf?: AlignSelf | AlignSelf[];

    gridAutoFlow?: GridAutoFlow | GridAutoFlow[];

    // paddings and margins
    p?: Envelope | Envelope[];
    m?: Envelope | Envelope[];

    // breakboints
    breakpoints?: GridBreakpoints;
    children: any;
}
