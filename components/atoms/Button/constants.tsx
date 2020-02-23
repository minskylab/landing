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
    inverse: { backgroundColor: "#1b1b1b", fontColor: "white", onHover: "white", onHoverText: "#1b1b1b" },
    minsky: { backgroundColor: "#FDE1A7", fontColor: "#1b1b1b", onHover: "#F4C45F", onHoverText: "#1b1b1b" },
    primary: { backgroundColor: "white", fontColor: "#1b1b1b", onHover: "#FDE1A7", onHoverText: "#1b1b1b" },
    secondary: { backgroundColor: "#FDE1A7", fontColor: "#1b1b1b", onHover: "white", onHoverText: "#1b1b1b" }
};

export const ButtonSizes: ButtonSize = {
    // normal: { width: "100px", height: "35px" },
    normal: { width: "fit-content", height: "35px" },
    // big: { width: "115px", height: "40px" },
    big: { width: "fit-content", height: "40px" },
    // compact: { width: "110px", height: "25px" }
    compact: { width: "fit-content", height: "25px" }
};
