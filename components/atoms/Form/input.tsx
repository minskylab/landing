import React, { FC } from "react";

import { InputStates, InputSizing, InputSizes, InputStatus } from "./constants"
import { styled } from "linaria/react";


const CustomInput = styled.input<InputProps & React.StyleHTMLAttributes<any>>`
    width: ${props => props.newSize.width ? props.newSize.width : props.style.width};
    height: ${props => props.newSize.height ? props.newSize.height : props.style.height};
    cursor: ${props => props.newStatus.cursor};
    padding:0.5em;
    font-size: 15px;
    background-color: "white";
    border-radius: 5px;
    font-family: "Karla";
    border: 2.3px solid;
    border-color: ${props => props.newStatus.color};
    color: ${props => props.color};
    -webkit-box-shadow: ${props => props.error || props.positive ? "7px 7px 17px -12px" + " " + props.newStatus.color : ""};
    -moz-box-shadow: ${props => props.error || props.positive ? "7px 7px 17px -12px" + " " + props.newStatus.color : ""};
    box-shadow: ${props => props.error || props.positive ? "7px 7px 17px -12px" + " " + props.newStatus.color : ""};
`




interface InputProps {
    normal?: boolean;
    big?: boolean;
    compact?: boolean;
    disabled?: boolean;
    error?: boolean;
    positive?: boolean;
    neutral?: boolean;
    id?: string;
    onChange?(event: React.FormEvent<any>): any;
    text?: string;
    placeholder?: string;
    newStatus?: InputStates;
    newSize?: InputSizing;
    type?: string;
    min?: number;
    as?: any;
    max?: number;
    onKeyPress?(): Event;
    required?: boolean;
}


const Input: FC<InputProps & React.StyleHTMLAttributes<any>> = (props: InputProps & React.StyleHTMLAttributes<any>) => {



    let newSize: InputSizing;
    if (props.big) {
        newSize = InputSizes.big
    } else if (props.compact) {
        newSize = InputSizes.compact
    } else {
        newSize = InputSizes.normal
    }

    let newStatus: InputStates;
    if (props.error) {
        newStatus = InputStatus.error;
    } else if (props.disabled) {
        newStatus = InputStatus.disabled;
    } else if (props.positive) {
        newStatus = InputStatus.positive;
    } else {
        newStatus = InputStatus.neutral;
    }


    if (props.min) {
        if (props.text?.length < props.min) {
            newStatus = InputStatus.error
        } else if (props.text?.length >= props.min) {
            newStatus = InputStatus.positive
        } else {
            newStatus = InputStatus.neutral
        }
    }
    if (props.max) {
        if (props.text?.length > props.max) {
            newStatus = InputStatus.error
        } else if (props.text?.length <= props.max) {
            newStatus = InputStatus.positive
        } else {
            newStatus = InputStatus.neutral
        }
    }



    props = { ...props, newSize, newStatus }
    return <CustomInput
        {...props}
        value={props?.text}
        newSize={newSize ? { width: props.newSize?.width.toString(), height: props.newSize?.height.toString() } : { width: props.style?.width.toString(), height: props.style?.height.toString() }}
        newStatus={props.newStatus ? { cursor: props.newStatus?.cursor.toString(), color: newStatus.color?.toString() } : { cursor: "text", color: "black" }}
    >


    </CustomInput>

}


export { Input };