import { ReactElement } from "react";

export type Size = string;

export interface Envelope {
    top?: Size;
    right?: Size;
    bottom?: Size;
    left?: Size;
    all?: Size;
    x?: Size;
    y?: Size;
}

export type AlignText = "start" | "end" | "center" | "stretch" | "default";

export type TextDecoration =
    | "auto"
    | "blink"
    | "dashed"
    | "dotted"
    | "double"
    | "from-font"
    | "grammar-error"
    | "line-through"
    | "none"
    | "overline"
    | "solid"
    | "spelling-error"
    | "underline"
    | "wavy";

export interface TextProps {
    size?: string;
    color?: string;
    weight?: string;
    children?: any;
    p?: Envelope;
    m?: Envelope;
    textAlign?: AlignText;
    textDecoration?: TextDecoration;
    lineHeight?: string;
    bold?: boolean;
}
