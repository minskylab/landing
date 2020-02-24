import React, { FC } from "react";
import { styled } from "linaria/react";
import ColorTypes from "../Colors";

export const CustomIcon = styled.svg`
	width: ${(p: SVGIconProps) => p.sizeWidth};
	fill: ${(p: SVGIconProps) => p.color};
	height: ${(p: SVGIconProps) => p.sizeHeight};
	vertical-align: middle;
	margin: 0 0;
`;

export interface SVGIconProps {
	sizeWidth: number | undefined;
	sizeHeight: number | undefined;
	color: string;
}

export const SVGIcon: FC<SVGIconProps> = (props: SVGIconProps) => {
	const color = props.color || ColorTypes.black._50;
	const sizeHeight = props.sizeHeight || 24;
	const sizeWidth = props.sizeWidth || 24;
	props = { ...props, sizeWidth, color, sizeHeight };
	return <CustomIcon {...props} viewBox={"0 0 24 24"} xmlns="http://www.w3.org/2000/svg" />;
};
