import React, { FC } from "react";
import { TextType } from "./constants";
import { styled } from "linaria/react";

const CustomInput = (props: TextProps) => styled(props.type.as)`
    font-family: ${props => props.type.fontFamily}, sans-serif;
    font-size: ${props => props.type.size};
    color: ${props => props.color};
    text-align: ${props => props.alignText};
`;

export interface TextProps {
    type: TextType;
    color?: string;
    alignText?: "start" | "end" | "center" | "stretch; (default)" | "default";
}

export const Text: FC<TextProps & React.HTMLAttributes<any>> = (props: TextProps & React.HTMLAttributes<any>) => {
    const color = props.color || "#1b1b1b";
    props = { ...props, color };
    const E = CustomInput(props);
    return <E {...props} />;
};
