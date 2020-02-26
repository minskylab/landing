import { FC } from "react";
import { SVGIcon, SVGIconProps } from "./SVGIcon";

const BranchOutline: FC<SVGIconProps & React.HTMLAttributes<any>> = (
	props: SVGIconProps & React.HTMLAttributes<any>
) => {
	return (
		<SVGIcon {...props} color={"white"}>
			<path
				d="M17.8333 14.6667C16.0844 14.6667 14.6667 16.0844 14.6667 17.8333C14.6667 19.5822 16.0844 21 17.8333 21C19.5822 21 21 19.5822 21 17.8333C21 16.0844 19.5822 14.6667 17.8333 14.6667ZM17.8333 14.6667V7.27778C17.8333 6.71788 17.6109 6.18091 17.215 5.785C16.8191 5.38909 16.2821 5.16667 15.7222 5.16667H12.5556M5.16667 8.33333C6.91557 8.33333 8.33333 6.91557 8.33333 5.16667C8.33333 3.41776 6.91557 2 5.16667 2C3.41776 2 2 3.41776 2 5.16667C2 6.91557 3.41776 8.33333 5.16667 8.33333ZM5.16667 8.33333V21"
				stroke={props.color}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</SVGIcon>
	);
};

export default BranchOutline;
