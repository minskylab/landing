import React, { FC } from "react";

import { styled } from "linaria/react";
import { ButtonTypes, ButtonTyping, ButtonSizing,ButtonSizes } from "./constants";


const CustomButtom = (props: ButtonProps) => styled.button`
    width: ${props => props.lastsize.width ? props.lastsize.width : props.other.style.width};
    height: ${props => props.lastsize.height ? props.lastsize.height : props.other.style.height};
    background: ${props => props.isDisable ? "#D7D7D7" : props.isSelect ? props.kind.onHover : props.kind.backgroundColor ? props.kind.backgroundColor : props.other.style.background};
    color: ${props=>props.kind.fontColor ? props.kind.fontColor : props.other.style.color};
    border-radius: 5px;
    border: 1px solid black;
    :hover{
        background: ${props=>props.kind.onHover ? props.kind.onHover : props.other.style.background};
        color: ${props=>props.kind.onHoverText ? props.kind.onHoverText : props.other.style.color};
    }
    cursor: ${props=>props.isDisable ? "not-allowed": "pointer"};

`;

interface ButtonProps {
    other?: React.StyleHTMLAttributes<any>;
    primary?: boolean;
    secondary?: boolean;
    minsky?: boolean;
    inverse?: boolean;
    normal?: boolean;
    big?: boolean;
    compact?: boolean;
    kind?: ButtonTyping;
    lastsize?: ButtonSizing;
    isSelect?: boolean;
    isDisable?: boolean;
    onClick(): void;
}


const Button: FC<ButtonProps & React.ButtonHTMLAttributes<any>> = (props: ButtonProps & React.ButtonHTMLAttributes<any>) => {
    let kind: ButtonTyping;

    if(props.primary){
        kind = ButtonTypes.primary;
    }else if(props.secondary){
        kind = ButtonTypes.secondary;
    }else if(props.inverse){
        kind = ButtonTypes.inverse;
    }else if(props.minsky){
        kind = ButtonTypes.minsky;
    }else{
        kind = ButtonTypes.primary
    }

    let lastsize: ButtonSizing;
    if(props.normal){
        lastsize = ButtonSizes.normal
    }else if(props.big){
        lastsize = ButtonSizes.big
    }else if(props.compact){
        lastsize = ButtonSizes.compact
    }else{
        lastsize = ButtonSizes.normal
    }

    let newProps = {...props, lastsize,kind}

    const B = CustomButtom(newProps);
    return <B {...props} />;
};


export { Button };