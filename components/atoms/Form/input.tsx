import React, {FC, Children} from "react";

import {InputState, InputSize, InputStates, InputSizing,InputSizes} from "./constants"
import { styled } from "linaria/react";


const CustomInput = styled.input<InputProps & React.StyleHTMLAttributes<any>>`
    width: ${props => props.newSize.width ? props.newSize.width : props.style.width};
    height: ${props => props.newSize.height ? props.newSize.height : props.style.height};
    cursor: ${props=> props.status.cursor};
    font-size: 15px;
    background-color: "white";
    border-radius: 5px;
    border: 2.3px solid ${props=>props.status.color};
    color: ${props => props.color };
    
`




interface InputProps {
    normal?: boolean;
    big ?: boolean;
    compact ?: boolean;
    disabled ?: boolean;
    error ?: boolean;
    positive ?: boolean;
    neutral ?: boolean;
    id?: string;
    onChange?(event: React.FormEvent<any>): any;
    value?: string;
    placeholder?: string;
    status?: InputStates;
    newSize?: InputSizing;
    type?: string;
    min?: number;
    as?: any;
    max?: number;
    onKeyPress?(): Event;
    required?: boolean;
}


const Input: FC<InputProps & React.StyleHTMLAttributes<any>> = (props :InputProps & React.StyleHTMLAttributes<any>) =>{

    let newSize: InputSizing;
    if (props.normal) {
        newSize = InputSizes.normal
    } else if (props.big) {
        newSize = InputSizes.big
    } else if (props.compact) {
        newSize = InputSizes.compact
    } else {
        newSize = InputSizes.normal
    }

    props = {...props,newSize}
    return <CustomInput 
    {...props}
    newSize ={newSize ? newSize:{width:props.style.width.toString(),height:props.style.height.toString()}} 
    status = {props.status ? props.status : {cursor: "text", color: "black"}}
    > 
    
    
     </CustomInput>

}


export {Input};