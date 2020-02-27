import { FC } from "react";
import { SVGIcon, SVGIconProps } from "./SVGIcon";

const LoveOutline: FC<SVGIconProps & React.HTMLAttributes<any>> = (props: SVGIconProps & React.HTMLAttributes<any>) => {
    return (
        <SVGIcon {...props} color={"white"}>
            <path
                d="M19.6679 5.42262C19.2001 4.9716 18.6447 4.61383 18.0334 4.36973C17.4221 4.12564 16.7669 4 16.1052 4C15.4435 4 14.7883 4.12564 14.177 4.36973C13.5657 4.61383 13.0103 4.9716 12.5426 5.42262L11.5718 6.35818L10.601 5.42262C9.65611 4.51203 8.37458 4.00047 7.03834 4.00047C5.70209 4.00047 4.42057 4.51203 3.47569 5.42262C2.53082 6.3332 2 7.56821 2 8.85597C2 10.1437 2.53082 11.3787 3.47569 12.2893L11.5718 20.0916L19.6679 12.2893C20.1358 11.8385 20.5071 11.3033 20.7604 10.7142C21.0137 10.1251 21.144 9.49365 21.144 8.85597C21.144 8.2183 21.0137 7.58687 20.7604 6.99776C20.5071 6.40866 20.1358 5.87341 19.6679 5.42262Z"
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SVGIcon>
    );
};

export default LoveOutline;
