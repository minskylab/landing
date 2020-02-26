import { FC } from "react";
import { SVGIcon, SVGIconProps } from "./SVGIcon";

const LinkedInOutline: FC<SVGIconProps & React.HTMLAttributes<any>> = (
	props: SVGIconProps & React.HTMLAttributes<any>
) => {
	return (
		<SVGIcon {...props} color={"white"}>
			<path
				d="M15.7895 9.05263C17.1295 9.05263 18.4147 9.58496 19.3622 10.5325C20.3098 11.4801 20.8421 12.7652 20.8421 14.1053V20H17.4737V14.1053C17.4737 13.6586 17.2962 13.2302 16.9804 12.9143C16.6645 12.5985 16.2362 12.4211 15.7895 12.4211C15.3428 12.4211 14.9144 12.5985 14.5986 12.9143C14.2827 13.2302 14.1053 13.6586 14.1053 14.1053V20H10.7368V14.1053C10.7368 12.7652 11.2692 11.4801 12.2167 10.5325C13.1643 9.58496 14.4494 9.05263 15.7895 9.05263Z"
				stroke={props.color}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M7.36842 9.89474H4V20H7.36842V9.89474Z"
				stroke={props.color}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M5.68421 7.36842C6.61437 7.36842 7.36842 6.61437 7.36842 5.68421C7.36842 4.75405 6.61437 4 5.68421 4C4.75405 4 4 4.75405 4 5.68421C4 6.61437 4.75405 7.36842 5.68421 7.36842Z"
				stroke={props.color}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</SVGIcon>
	);
};

export default LinkedInOutline;
