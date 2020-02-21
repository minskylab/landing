import React, { FC } from "react";

import { styled } from "linaria/react";
import { ButtonTypes, ButtonTyping, ButtonSizing, ButtonSizes } from "./constants";

const CustomButtom = styled.button<ButtonProps & React.StyleHTMLAttributes<any>>`
    width: ${props => props.size.width ? props.size.width : props.style.width};
    height: ${props => props.size.height ? props.size.height : props.style.height};
    font-size: 15px;
    background: ${ props => props.isDisable ? "#D7D7D7" : props.isSelect ?  props.kind.onHover :props.kind.backgroundColor};
    color: ${props => props.isSelect ? props.kind.onHoverText : props.kind.fontColor};
    border-radius: 5px;
    border: 2.3px solid black;
    cursor: ${props => props.isDisable ? "not-allowed": "pointer"};
    transition: 0.5s;
    font-family: "Karla";
    &:hover{
        background: ${props=> props.isDisable ? "#D7D7D7" : props.kind.onHover};
        color: ${props=>props.kind.onHoverText}
    }   

`;

interface ButtonProps {
    primary?: boolean;
    secondary?: boolean;
    minsky?: boolean;
    inverse?: boolean;
    normal?: boolean;
    big?: boolean;
    compact?: boolean;
    type?: 'submit' | 'reset' | 'button';
    kind?: ButtonTyping;
    size?: ButtonSizing;
    isSelect?: boolean;
    isDisable?: boolean;
    onClick?(): void;
}


const Button: FC<ButtonProps & React.StyleHTMLAttributes<any>> = (props: ButtonProps & React.StyleHTMLAttributes<any>) => {
    let newKind: ButtonTyping;

    if (props.primary) {
        newKind = ButtonTypes.primary;
    } else if (props.secondary) {
        newKind = ButtonTypes.secondary;
    } else if (props.inverse) {
        newKind = ButtonTypes.inverse;
    } else if (props.minsky) {
        newKind = ButtonTypes.minsky;
    } else {
        newKind = ButtonTypes.primary
    }

    let newSize: ButtonSizing;
    if (props.normal) {
        newSize = ButtonSizes.normal
    } else if (props.big) {
        newSize = ButtonSizes.big
    } else if (props.compact) {
        newSize = ButtonSizes.compact
    } else {
        newSize = ButtonSizes.normal
    }

    let newProps = { ...props, newSize, newKind }


    return <CustomButtom  
    {...newProps} 
    size ={newSize ? newSize:{width:props.style.width.toString(),height:props.style.height.toString()}} 
    kind = {newKind ? newKind:{backgroundColor:props.style.background.toString(), fontColor:props.style.color.toString(),onHover:"black",onHoverText:"white"}}
    />; 
};


export { Button };