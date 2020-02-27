import React, { ReactElement, FC, Children } from "react";
import { CustomText, CustomTextModifiers, AvailableElementTypes } from "./base";
import { Envelope, AlignText } from "./types";
import { envelopeToPlain } from "./parser";
import { TextProps } from "./types";

export type MinskyFonts = "Karla" | "Rubik" | "PT Mono";

export interface FullTextProps extends TextProps {
    as?: AvailableElementTypes;
    fontFamily?: MinskyFonts;
}

const Text: FC<FullTextProps> = (props: FullTextProps) => {
    const newProps: CustomTextModifiers = {
        as: props.as || "p",
        color: props.color || "#1b1b1b",
        fontFamily: props.fontFamily || "Karla",
        size: props.size,
        weight: props.weight,
        bold: props.bold,
        lineHeight: props.lineHeight,
        m: envelopeToPlain(props.m),
        p: envelopeToPlain(props.p),
        textAlign: props.textAlign
    };
    const E = CustomText(newProps);

    return <E {...newProps}>{props.children}</E>;
};

export default Text;
