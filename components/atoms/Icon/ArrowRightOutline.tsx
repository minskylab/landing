import { FC } from "react";
import { SVGIcon, SVGIconProps } from "./SVGIcon";

const ArrowRightOutline: FC<SVGIconProps & React.HTMLAttributes<any>> = (
    props: SVGIconProps & React.HTMLAttributes<any>
) => {
    return (
        <SVGIcon {...props} color={"white"}>
            <path
                d="M3 12H21M21 12L12 3M21 12L12 21"
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SVGIcon>
    );
};

export default ArrowRightOutline;
