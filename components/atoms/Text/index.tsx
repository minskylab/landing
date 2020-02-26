import React, { FC } from "react";
import { TextType } from "./constants";
import { styled } from "linaria/react";

const CustomInput = (props: TextProps) => styled(props.type.as)`
    font-family: ${props => props.type.fontFamily || "sans-serif"}, sans-serif;
    font-size: ${props => props.fontSize || props.type.size};
    color: ${props => props.color || ""};
    text-align: ${props => props.alignText || ""};
    line-height: ${props => props.lineHeight || "1.2em"};
    margin: ${props => props.margin || ""};
    font-weight: ${props => props.fontWeight || ""};
`;

export interface TextProps {
    type: TextType;
    color?: string;
    alignText?: "start" | "end" | "center" | "stretch; (default)" | "default";
    lineHeight?: string;
    margin?: string;
    fontWeight?: any;
    fontSize?: any;
}

export const Text: FC<TextProps & React.HTMLAttributes<any>> = (props: TextProps & React.HTMLAttributes<any>) => {
    const color = props.color || "#1b1b1b";
    const fontWeight = props.fontWeight || 400;
    props = { ...props, color, fontWeight };
    const E = CustomInput(props);
    return <E {...props} />;
};
