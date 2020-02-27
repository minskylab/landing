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

export interface TextProps {
    size?: string;
    color?: string;
    weight?: string;
    children?: any;
    p?: Envelope;
    m?: Envelope;
    textAlign?: AlignText;
    lineHeight?: string;
    bold?: boolean;
}
