import { Size } from "./grid-types";

export interface GridBreakpoints {
    sm?: Size;
    md?: Size;
    lg?: Size;
    xl?: Size;
}

export var defaultBreakpoints: GridBreakpoints = {
    sm: "0em",
    md: "40em",
    lg: "58em",
    xl: "64em"
};
