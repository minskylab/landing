import React, { FC } from "react";
import { styled } from "linaria/react";
import ColorTypes from "../Colors";

export const CustomIcon = styled.svg`
	width: ${(p: SVGIconProps) => p.width};
	fill: ${(p: SVGIconProps) => p.color};
	height: ${(p: SVGIconProps) => p.height};
	vertical-align: middle;
	margin: 0 0;
`;

export interface SVGIconProps {
	width?: number;
	height?: number;
	color?: string;
}

export const SVGIcon: FC<SVGIconProps> = (props: SVGIconProps) => {
	const color = props.color;
	const sizeHeight = props.height || 24;
	const sizeWidth = props.width || 24;
	props = { ...props, width: sizeWidth, height: sizeHeight, color };
	return <CustomIcon {...props} viewBox={"0 0 24 24"} xmlns="http://www.w3.org/2000/svg" />;
};
