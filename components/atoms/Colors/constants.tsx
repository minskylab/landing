import React from "react";

export interface ColorType {
    _0: string;
    _5: string;
    _10: string;
    _20: string;
    _30: string;
    _40: string;
    _50: string;
    _60: string;
}

export interface ColorTypes {
    yellow: ColorType;
    black: ColorType;
    orange: ColorType;
}

export const ColorTypes: ColorTypes = {
    yellow: {
        _0: "#fff8af",
        _5: "#fff8af",
        _10: "#fff8ae",
        _20: "#fff091",
        _30: "#ffde5f", //here
        _40: "#efc629",
        _50: "#d9ae0a",
        _60: "#c29800"
    },
    black: {
        _0: "#bdbdbd",
        _5: "#7e7e7e",
        _10: "#3f3f3f",
        _20: "#000000", //here
        _30: "#2e2e2e",
        _40: "#5d5d5d",
        _50: "#8c8c8c",
        _60: "#bababa"
    },
    orange: {
        _0: "#ffd3ca",
        _5: "#ffbfb2",
        _10: "#ffaa99",
        _20: "#ff826d",
        _30: "#ff654c", //here
        _40: "#ed4e3a",
        _50: "#d53e2f",
        _60: "#ba3329"
    }
};
