import React, { FC } from "react";
import { IconType } from "./constants";
import { styled } from "linaria/react";
import ColorTypes from "../Colors";

const CustomIcon = (props: IconProps) => styled(props.type.as)`
    height: ${props => props.size || props.type.size};
    width: ${props => props.size || props.type.size};
    fill: ${props => props.color || props.type.color};
    vertical-align: middle;
	margin: 0 0;
`;

export interface IconProps {
	type: IconType;
	color?: string;
	size?: Number;
}

export const Icon: FC<IconProps & React.HTMLAttributes<any>> = (props: IconProps & React.HTMLAttributes<any>) => {
	const color = props.color || ColorTypes.black._20;
	const size = props.size || 52;
	props = { ...props, color, size };
	const E = CustomIcon(props);
	return <E {...props} />;
};
