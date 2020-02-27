import { styled } from "linaria/react";
import { StatelessComponent, ElementType } from "react";

export type AvailableElementTypes = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface CustomTextModifiers {
    as: AvailableElementTypes | ElementType;
    fontFamily: string;
    size?: string;
    color?: string;
    weight?: string;

    p?: string;
    m?: string;
    textAlign?: string;
    textDecoration?: string;
    lineHeight?: string;
    bold?: boolean;
}

export const CustomText = (mods: CustomTextModifiers) => styled(mods.as)`
    font-family: ${(mods: CustomTextModifiers) => mods.fontFamily || "sans-serif"}, sans-serif;
    font-size: ${(mods: CustomTextModifiers) => mods.size || "1rem"};
    color: ${(mods: CustomTextModifiers) => mods.color || "#1b1b1b"};
    font-weight: ${(mods: CustomTextModifiers) => (mods.bold ? "600" : mods.weight || "400")};
    padding: ${(mods: CustomTextModifiers) => mods.p || "0"};
    margin: ${(mods: CustomTextModifiers) => mods.m || "0"};
    text-align: ${(mods: CustomTextModifiers) => mods.textAlign || ""};
    text-decoration: ${(mods: CustomTextModifiers) => mods.textDecoration || ""};
    line-height: ${(mods: CustomTextModifiers) => mods.lineHeight || ""};
`;
