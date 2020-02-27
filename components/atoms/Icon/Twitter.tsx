import { FC } from "react";
import { SVGIcon, SVGIconProps } from "./SVGIcon";

const Twitter: FC<SVGIconProps & React.HTMLAttributes<any>> = (props: SVGIconProps & React.HTMLAttributes<any>) => {
    return (
        <SVGIcon {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.47717 2 2 6.47717 2 12C2 17.5228 6.47717 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47717 17.5228 2 12 2ZM11.7215 10.4742L11.7005 10.1281C11.6375 9.23129 12.1901 8.41212 13.0645 8.09437C13.3862 7.98137 13.9318 7.96725 14.2886 8.06612C14.4285 8.1085 14.6943 8.24971 14.8831 8.37683L15.2259 8.60987L15.6036 8.48983C15.8135 8.42625 16.0932 8.32033 16.2191 8.24971C16.338 8.18617 16.443 8.15083 16.443 8.17204C16.443 8.29208 16.1842 8.70167 15.9673 8.92763C15.6735 9.24542 15.7575 9.27367 16.352 9.06179C16.7088 8.94175 16.7158 8.94175 16.6458 9.07592C16.6038 9.14654 16.387 9.39371 16.1562 9.61967C15.7645 10.0081 15.7435 10.0505 15.7435 10.3753C15.7435 10.8767 15.5057 11.9218 15.2678 12.4938C14.8272 13.5672 13.8829 14.6758 12.9386 15.2337C11.6096 16.0176 9.83987 16.2153 8.35 15.7563C7.85337 15.6009 7 15.2055 7 15.1349C7 15.1137 7.25879 15.0854 7.57358 15.0784C8.23108 15.0642 8.88858 14.8806 9.44817 14.5558L9.82592 14.3298L9.39221 14.1815C8.77667 13.9697 8.22408 13.4824 8.08421 13.0234C8.04221 12.8751 8.05621 12.868 8.44792 12.868L8.85362 12.861L8.51087 12.6986C8.10517 12.4938 7.73446 12.1477 7.55258 11.7947C7.41967 11.5405 7.25183 10.8978 7.30079 10.8484C7.31475 10.8272 7.46167 10.8696 7.62954 10.9261C8.11217 11.1026 8.17512 11.0603 7.89533 10.7637C7.37071 10.227 7.20983 9.429 7.46167 8.67342L7.58058 8.33446L8.04221 8.79346C8.98654 9.71854 10.0987 10.2694 11.3718 10.4318L11.7215 10.4742Z"
            />
        </SVGIcon>
    );
};

export default Twitter;
