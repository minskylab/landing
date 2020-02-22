import React from "react";


export interface InputStates {
    color: string;
    cursor: string;
}


export interface InputSizing {
    width: string;
    height: string;
}

export interface InputState {
    disabled: InputStates;
    error: InputStates;
    positive: InputStates;
    neutral: InputStates;
}


export interface InputSize {
    normal: InputSizing;
    big: InputSizing;
    compact: InputSizing;
}

export const InputSizes: InputSize = {
    normal: { width: "200px", height: "30px" },
    big: { width: "300px", height: "35px" },
    compact: { width: "150px", height: "25px" },
}

export const InputStatus: InputState = {
    disabled: { color: "#D7D7D7", cursor: "not-allowed" },
    error: { color: "red", cursor: "text" },
    positive: { color: "#0ACF83", cursor: "text" },
    neutral: { color: "black", cursor: "text" }
}




export interface CheckBoxSizing {
    width: string;
    height: string;
    chwidth: string;
    chheight: string;

}
export interface CheckboxStates {
    color: string;
    cursor: string;
}
export interface CheckboxState {
    disabled: CheckboxStates;
    neutral: CheckboxStates;
}
export interface CheckboxSize {
    small: CheckBoxSizing;
    medium: CheckBoxSizing;
    big: CheckBoxSizing;
}


export const CheckBoxType: CheckboxSize = {
    small: { width: "20px", height: "20px", chwidth: "15px", chheight: "15px" },
    medium: { width: "25px", height: "25px", chwidth: "17px", chheight: "17px" },
    big: { width: "30px", height: "30px", chwidth: "20px", chheight: "20px" },
}

export const CheckboxStateTypes: CheckboxState = {
    disabled: { color: "#D7D7D7", cursor: "not-allowed" },
    neutral: { color: "black", cursor: "pointer" }
}