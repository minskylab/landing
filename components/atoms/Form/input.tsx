import React, { FC } from "react";

import { InputStates, InputSizing, InputSizes, InputStatus } from "./constants"
import { styled } from "linaria/react";


const CustomTextInput = styled.input<InputProps>`
    width: ${props => props.newSize.width ? props.newSize.width : "auto"};
    height: ${props => props.newSize.height ?  props.newSize.height  : "auto"};
    cursor: ${props => props.newStatus.cursor ? props.newStatus.cursor  : "pointer"};
    padding:"0.5em";
    font-size: ${props => props.big ? "22px" : "15px"};
    background-color: "white";
    border-radius: "10px";
    font-family: "Karla";
    border: "2.3px" solid;
    border-color: ${props => props.newStatus.color ? props.newStatus.color.toString()  : "black"};
    color: ${props => props.newStatus.color ? props.newStatus.color.toString()  : "black"};
    -webkit-box-shadow: ${props => props.error || props.positive ? "7px 7px 17px -12px" + " " + props.newStatus.color.toString() : "none"};
    -moz-box-shadow: ${props => props.error  || props.positive ? "7px 7px 17px -12px" + " " + props.newStatus.color.toString()  : "none"};
    box-shadow: ${props => props.error || props.positive ? "7px 7px 17px -12px" + " " + props.newStatus.color.toString()  : "none"};
`

const Wrapper = styled.div`
    display: "flex";
    flex-direction: "column";
    margin: "0.8em";
`
const Caption = styled.div<InputProps>`
    font-size: "9px";
    font-family: "Karla";
    color: ${props => props.newStatus.color ? props.newStatus.color.toString()  : "black"};
    display: "flex";
    margin: "0.5em";
`

interface InputProps {
    normal?: boolean;
    big?: boolean;
    compact?: boolean;
    disabled?: boolean;
    error?: boolean;
    positive?: boolean;
    neutral?: boolean;

    placeholder?: string;
    newStatus?: InputStates;
    newSize?: InputSizing;
    caption?: string;
    defaultValue?:string;
    required?: boolean;
}


const Input: FC<InputProps & React.StyleHTMLAttributes<any>> = (props: InputProps & React.StyleHTMLAttributes<any>) => {
    let newSize: InputSizing = InputSizes.normal;
    if (props.big) {
        newSize = InputSizes.big
    } else if (props.compact) {
        newSize = InputSizes.compact
    } else {
        newSize = InputSizes.normal
    }

    let newStatus: InputStates = InputStatus.neutral;
    if (props.error) {
        newStatus = InputStatus.error;
    } else if (props.disabled) {
        newStatus = InputStatus.disabled;
    } else if (props.positive) {
        newStatus = InputStatus.positive;
    } else {
        newStatus = InputStatus.neutral;
    }

    let newCaption: string;
    if (props?.caption){
        newCaption = props.caption.toString();
    }else{
        newCaption = "";
    }
    
    props = { ...props, newSize, newStatus }

    return <Wrapper as="div"> <CustomTextInput
        {...props}>
    </CustomTextInput>
        <Caption as="div" newStatus={newStatus}>{newCaption}</Caption>
    </Wrapper>

}


export { Input };