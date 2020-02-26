import { FC } from "react";
import { SVGIcon, SVGIconProps } from "./SVGIcon";

const PrizeOutline: FC<SVGIconProps & React.HTMLAttributes<any>> = (
	props: SVGIconProps & React.HTMLAttributes<any>
) => {
	return (
		<SVGIcon {...props} color={"white"}>
			<path
				d="M8.77227 13.1323L7.72727 21L12.0455 18.4091L16.3636 21L15.3186 13.1236M18.0909 8.04545C18.0909 11.3843 15.3843 14.0909 12.0455 14.0909C8.70664 14.0909 6 11.3843 6 8.04545C6 4.70664 8.70664 2 12.0455 2C15.3843 2 18.0909 4.70664 18.0909 8.04545Z"
				stroke={props.color}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</SVGIcon>
	);
};

export default PrizeOutline;
