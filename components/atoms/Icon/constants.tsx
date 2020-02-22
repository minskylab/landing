import React from "react";
import ColorTypes from "../Colors";

export interface IconType {
	as: React.ElementType;
	size: string;
	color: string;
}

export interface IconTypes {
	linkedin: IconType;
}

export const IconTypes: IconTypes = {
	linkedin: { as: "svg", size: "24px", color: ColorTypes.black._20 }
};
