import { FC } from "react";
import { SVGIcon, SVGIconProps } from "./SVGIcon";

const GithubOutline: FC<SVGIconProps & React.HTMLAttributes<any>> = (
    props: SVGIconProps & React.HTMLAttributes<any>
) => {
    return (
        <SVGIcon {...props} color={"white"}>
            <path
                d="M14.9847 21V17.6871C15.0168 17.2789 14.9617 16.8685 14.8229 16.4833C14.6842 16.0981 14.465 15.7468 14.18 15.4528C16.868 15.1532 19.693 14.1345 19.693 9.46044C19.6928 8.26524 19.233 7.11588 18.4089 6.25025C18.7991 5.20459 18.7716 4.04878 18.3319 3.02294C18.3319 3.02294 17.3217 2.72332 14.9847 4.28989C13.0226 3.75813 10.9544 3.75813 8.99236 4.28989C6.65534 2.72332 5.6452 3.02294 5.6452 3.02294C5.20551 4.04878 5.17792 5.20459 5.56815 6.25025C4.73789 7.12231 4.27768 8.28205 4.28408 9.48612C4.28408 14.1259 7.10904 15.1446 9.79704 15.4785C9.5154 15.7695 9.29819 16.1166 9.15955 16.4971C9.02091 16.8776 8.96394 17.2831 8.99236 17.6871V21M8.99236 18.4318C4.7121 19.7159 4.7121 16.2917 3 15.8637L8.99236 18.4318Z"
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={"transparent"}
            />
        </SVGIcon>
    );
};

export default GithubOutline;
