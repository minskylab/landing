import React from "react";


export interface ButtonSizing {
    width: string;
    height: string;
}

export interface ButtonTyping {
    backgroundColor: string;
    fontColor: string;
    onHover: string;
    onHoverText: string;
}

export interface ButtonType {
    primary: ButtonTyping;
    secondary: ButtonTyping;
    inverse: ButtonTyping;
    minsky: ButtonTyping;

}
export interface ButtonSize {
    normal: ButtonSizing;
    big: ButtonSizing;
    compact: ButtonSizing;
}



export const ButtonTypes: ButtonType = {
    inverse: { backgroundColor: "black", fontColor: "white", onHover: "white", onHoverText: "black" },
    minsky: { backgroundColor: "#FDE1A7", fontColor: "black", onHover: "#F4C45F", onHoverText: "black" },
    primary: { backgroundColor: "white", fontColor: "black", onHover: "#FDE1A7", onHoverText: "black" },
    secondary: { backgroundColor: "#FDE1A7", fontColor: "black", onHover: "white", onHoverText: "black" },
}

export const ButtonSize: ButtonSize = {
    normal: { width: "100px", height: "35px" },
    big: { width: "115px", height: "40px" },
    compact: { width: "110px", height: "25px" },
}