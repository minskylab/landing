import React from "react";

export interface ButtonTypes {
    width?: string;
    height?: string;
    borderRadius?: string;
    stroke?: string;
    color?: string;
    colorStroke?: string;
    widthStroke?: string;
    fontColor?: string;
    label: string;
    inverse?: boolean;
    disabled?: boolean;
    onClick?(): void;
}


