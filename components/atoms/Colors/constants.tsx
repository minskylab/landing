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
		_0: "#ffffff",
		_5: "#f1f3f9",
		_10: "#e3e9f2",
		_20: "#b2becb",
		_30: "#737f8c",
		_40: "#3b424d",
		_50: "#1a1d25", //here
		_60: "#090d0c"
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
