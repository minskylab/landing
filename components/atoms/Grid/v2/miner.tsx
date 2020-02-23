import { GridType, GridTemplate, GridPosition, Size, Envelope } from "./grid-types";
import { JustifyItems, JustifyContent, JustifySelf, AlignSelf } from "../base";
import { AlignItems, AlignContent } from "./types";

// // type
// type?: GridType | GridType[];

export const getDisplayFromGridProps = (type: GridType | GridType[]): Array<string> => {
    if (typeof type === "undefined") {
        Array<string>(4).fill("block");
    }

    if (type instanceof Array) {
        const suffix = Array<string>(4 - type.length).fill(type[type.length - 1]);
        return [...type, ...suffix];
    }

    return Array<string>(4).fill(type || "block");
};

// // templates
const gridTemplateToString = (template: GridTemplate): string => {
    if (template.raw) {
        return template.raw || "";
    }

    return `repeat(${template.parts || 1}, ${template.size || "1fr"})`;
};

export const getTemplateFromGridProps = (template: GridTemplate | GridTemplate[]): Array<string> => {
    if (typeof template === "undefined") {
        return Array<string>(4).fill("");
    }

    if (template instanceof Array) {
        const suffix = Array<string>(4 - template.length).fill(gridTemplateToString(template[template.length - 1]));
        return [...template.map(t => gridTemplateToString(t)), ...suffix];
    }

    return Array<string>(4).fill(gridTemplateToString(template));
};

// // posititon
const gridPositionToString = (pos: GridPosition): string => {
    if (pos.raw) {
        return pos.raw;
    }

    if (pos.how) {
        return `${pos.from} / span ${pos.how}`;
    }

    return `${pos.from} / ${pos.to}`;
};

export const getPositionFromGridProps = (pos: GridPosition | GridPosition[]): Array<string> => {
    if (typeof pos === "undefined") {
        return Array<string>(4).fill("");
    }

    if (pos instanceof Array) {
        const suffix = Array<string>(4 - pos.length).fill(gridPositionToString(pos[pos.length - 1]));
        return [...pos.map(t => gridPositionToString(t)), ...suffix];
    }

    return Array<string>(4).fill(gridPositionToString(pos));
};

// // gaps
// rowGap?: Size | Size[];
// columnGap?: Size | Size[];

export const getGapFromProps = (gap: Size | Size[]): Array<string> => {
    if (typeof gap === "undefined") {
        return Array<string>(4).fill("");
    }

    if (gap instanceof Array) {
        const suffix = Array<string>(4 - gap.length).fill(gap[gap.length - 1]);
        return [...gap, ...suffix];
    }

    return Array<string>(4).fill(gap || "");
};

// // alignment
// justifyItems?: JustifyItems | JustifyItems[];
// alignItems?: AlignItems | AlignItems[];

// justifyContent?: JustifyContent | JustifyContent[];
// alignContent?: AlignContent | AlignContent[];

// justifySelf?: JustifySelf | JustifySelf[];
// alignSelf?: AlignSelf | AlignSelf[];

// gridAutoFlow?: GridAutoFlow | GridAutoFlow[];

export const getJustifyItemsFromProps = (prop: JustifyItems | JustifyItems[]): Array<string> => {
    if (typeof prop === "undefined") {
        return Array<string>(4).fill("default");
    }

    if (prop instanceof Array) {
        const suffix = Array<string>(4 - prop.length).fill(prop[prop.length - 1]);
        return [...prop, ...suffix];
    }

    return Array<string>(4).fill(prop || "default");
};

export const getAlignItemsFromProps = (prop: AlignItems | AlignItems[]): Array<string> => {
    if (typeof prop === "undefined") {
        return Array<string>(4).fill("default");
    }

    if (prop instanceof Array) {
        const suffix = Array<string>(4 - prop.length).fill(prop[prop.length - 1]);
        return [...prop, ...suffix];
    }

    return Array<string>(4).fill(prop || "default");
};

export const getJustifyContentFromProps = (prop: JustifyContent | JustifyContent[]): Array<string> => {
    if (typeof prop === "undefined") {
        return Array<string>(4).fill("default");
    }

    if (prop instanceof Array) {
        const suffix = Array<string>(4 - prop.length).fill(prop[prop.length - 1]);
        return [...prop, ...suffix];
    }

    return Array<string>(4).fill(prop || "default");
};

export const getAlignContentFromProps = (prop: AlignContent | AlignContent[]): Array<string> => {
    if (typeof prop === "undefined") {
        return Array<string>(4).fill("default");
    }

    if (prop instanceof Array) {
        const suffix = Array<string>(4 - prop.length).fill(prop[prop.length - 1]);
        return [...prop, ...suffix];
    }

    return Array<string>(4).fill(prop || "default");
};

export const getJustifySelfFromProps = (prop: JustifySelf | JustifySelf[]): Array<string> => {
    if (typeof prop === "undefined") {
        return Array<string>(4).fill("default");
    }

    if (prop instanceof Array) {
        const suffix = Array<string>(4 - prop.length).fill(prop[prop.length - 1]);
        return [...prop, ...suffix];
    }

    return Array<string>(4).fill(prop || "default");
};

export const getAlignSelfFromProps = (prop: AlignSelf | AlignSelf[]): Array<string> => {
    if (typeof prop === "undefined") {
        return Array<string>(4).fill("default");
    }

    if (prop instanceof Array) {
        const suffix = Array<string>(4 - prop.length).fill(prop[prop.length - 1]);
        return [...prop, ...suffix];
    }

    return Array<string>(4).fill(prop || "default");
};

// // paddings and margins
// p?: Envelope | Envelope[];
// m?: Envelope | Envelope[];

const envelopeToPlain = (envelope: Envelope): string => {
    if (envelope.all) {
        return `${envelope.all}`;
    }

    if (envelope.x || envelope.y) {
        return `${envelope.x || 0} ${envelope.y || 0} ${envelope.x || 0} ${envelope.y || 0}`;
    }

    return `${envelope.top || "0"} ${envelope.right || "0"} ${envelope.bottom || "0"} ${envelope.left || "0"}`;
};

export const getPlainEnvelopeFromProps = (p: Envelope | Envelope[]): Array<string> => {
    if (typeof p === "undefined") {
        return Array<string>(4).fill("0");
    }

    if (p instanceof Array) {
        const suffix = Array<string>(4 - p.length).fill(envelopeToPlain(p[p.length - 1]));
        return [...p.map(t => envelopeToPlain(t)), ...suffix];
    }

    return Array<string>(4).fill(envelopeToPlain(p));
};

// // breakboints
// breakpoints?: GridBreakpoints;
// children: any;
