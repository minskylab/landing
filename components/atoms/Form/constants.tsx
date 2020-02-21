import React from "react";


export interface InputStates {
    color: string;
    cursor: string;
}


export interface InputSizing {
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
    normal: InputSizing ;
    big: InputSizing ;
    compact: InputSizing ;
}

export const InputSizes: InputSize = {
    normal: { width: "200px", height: "35px" },
    big: { width: "300px", height: "35px" },
    compact: { width: "150px", height: "35px" },
}

export const InputStatus: InputState = {
    disabled: {color: "#D7D7D7", cursor: "not-allowed"},
    error: {color: "red", cursor: "text"},
    positive: {color: "#0ACF83", cursor: "text"},
    neutral: {color:"black", cursor: "text"}
}

