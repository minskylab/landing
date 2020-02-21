import React, { FC } from "react";
import { TextType } from "./constants";
import { styled } from "linaria/react";

const CustomInput = (props: TextProps) => styled(props.type.as)`
    font-family: ${props => props.type.fontFamily}, sans-serif;
    font-size: ${props => props.type.size};
    color: ${props => props.color};
`;

interface TextProps {
    type?: TextType;
    color?: string;
}

const Text: FC<TextProps & React.HTMLAttributes<any>> = (props: TextProps & React.HTMLAttributes<any>) => {
    const E = CustomInput(props);
    return <E />;
};

export { Text };
