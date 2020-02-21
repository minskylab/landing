import React, { FC } from "react";

import { styled } from "linaria/react";
import { ButtonTypes, ButtonTyping, ButtonSizing, ButtonSizes } from "./constants";

// height: ${props=> props.size.height };
// background: ${ props=>props.kind.backgroundColor};
// color: ${props=>props.kind.fontColor};
// border-radius: 5px;
// border: 1px solid black;
// &:hover{
//     background: ${props=>props.kind.onHover };
//     color: ${props=>props.kind.onHoverText };
// }
// cursor: ${props=>props.isDisable ? "not-allowed": "pointer"};
const CustomButtom = styled.button<ButtonProps>`
    width: ${props => props.size.width};
    height: ${props => props.size.height};
    background: ${ props => props.kind.backgroundColor};
    color: ${props => props.kind.fontColor};
    border-radius: 5px;
    border: 1px solid black;
    cursor: ${props => props.isDisable ? "not-allowed": "pointer"};

`;

interface ButtonProps {
    primary?: boolean;
    secondary?: boolean;
    minsky?: boolean;
    inverse?: boolean;
    normal?: boolean;
    big?: boolean;
    compact?: boolean;
    kind?: ButtonTyping;
    size?: ButtonSizing;
    isSelect?: boolean;
    isDisable?: boolean;
    onClick(): void;
}


const Button: FC<ButtonProps> = (props: ButtonProps) => {
    let kind: ButtonTyping;

    if (props.primary) {
        kind = ButtonTypes.primary;
    } else if (props.secondary) {
        kind = ButtonTypes.secondary;
    } else if (props.inverse) {
        kind = ButtonTypes.inverse;
    } else if (props.minsky) {
        kind = ButtonTypes.minsky;
    } else {
        kind = ButtonTypes.primary
    }

    let size: ButtonSizing;
    if (props.normal) {
        size = ButtonSizes.normal
    } else if (props.big) {
        size = ButtonSizes.big
    } else if (props.compact) {
        size = ButtonSizes.compact
    } else {
        size = ButtonSizes.normal
    }

    let newProps = { ...props, size, kind }

    const B = CustomButtom(newProps);
    return <B {...props} />;
};


export { Button };