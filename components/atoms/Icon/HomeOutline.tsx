import { FC } from "react";
import { SVGIcon, SVGIconProps } from "./SVGIcon";

const HomeOutline: FC<SVGIconProps & React.HTMLAttributes<any>> = (props: SVGIconProps & React.HTMLAttributes<any>) => {
    return (
        <SVGIcon {...props} color={"white"}>
            <path
                d="M7.19531 21.9111V11.9111H13.1953V21.9111M1.19531 8.91113L10.1953 1.91113L19.1953 8.91113V19.9111C19.1953 20.4416 18.9846 20.9503 18.6095 21.3253C18.2345 21.7004 17.7257 21.9111 17.1953 21.9111H3.19531C2.66488 21.9111 2.15617 21.7004 1.7811 21.3253C1.40603 20.9503 1.19531 20.4416 1.19531 19.9111V8.91113Z"
                stroke={props.color}
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SVGIcon>
    );
};

export default HomeOutline;
