import React, { FC } from "react";

import { InputStates, InputSizing, InputSizes, InputStatus } from "./constants"
import { styled } from "linaria/react";


const CustomInput = styled.input<InputProps & React.StyleHTMLAttributes<any>>`
    width: ${props => props.newSize.width || props.style.width};
    height: ${props => props.newSize.height || props.style.width};
    cursor: ${props => props.newStatus.cursor ? props.newStatus.cursor : "pointer"};
    padding:0.5em;
    font-size: 15px;
    background-color: white;
    border-radius: 5px;
    font-family: "Karla";
    border: 2.3px solid;
    border-color: ${props => props.newStatus.color};
    color: ${props => props.newStatus.color};
    -webkit-box-shadow: ${props => props.error || props.positive ? "7px 7px 17px -12px" + " " + props.newStatus.color : ""};
    -moz-box-shadow: ${props => props.error || props.positive ? "7px 7px 17px -12px" + " " + props.newStatus.color : ""};
    box-shadow: ${props => props.error || props.positive ? "7px 7px 17px -12px" + " " + props.newStatus.color : ""};
`

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    margin: 0.8em;
`
const Caption = styled.div<InputProps>`
    font-size:9px;
    font-family: "Karla";
    color: ${props => props.newStatus.color};
    display: flex;
    margin:0.5em;
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
    placeholder?: string;
    newStatus?: InputStates;
    newSize?: InputSizing;
    caption?: string;
    defaultValue?:string;
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


    
    props = { ...props, newSize, newStatus }

    return <Wrapper as="div"> <CustomInput
        {...props}
        newSize={newSize ? newSize : { width: props.style.width.toString(), height: props.style.height.toString() }}
        newStatus={newStatus ? newStatus : { cursor: props.style.cursor.toString(), color: props.style.color.toString() }}
    >
    </CustomInput>
        <Caption as="div" newStatus={props.newStatus}>{props?.caption || ""}</Caption>
    </Wrapper>

}


export { Input };