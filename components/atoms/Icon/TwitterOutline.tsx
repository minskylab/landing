import { FC } from "react";
import { SVGIcon, SVGIconProps } from "./SVGIcon";

const TwitterOutline: FC<SVGIconProps & React.HTMLAttributes<any>> = (
    props: SVGIconProps & React.HTMLAttributes<any>
) => {
    return (
        <SVGIcon {...props} color={"white"}>
            <path
                d="M21.6169 5.00897C20.763 5.61128 19.8176 6.07195 18.8171 6.37324C18.28 5.75576 17.5663 5.3181 16.7725 5.11947C15.9786 4.92083 15.1429 4.9708 14.3784 5.26261C13.6138 5.55442 12.9573 6.07399 12.4977 6.75105C12.0381 7.42812 11.7975 8.23001 11.8085 9.04827V9.93995C10.2415 9.98058 8.68873 9.63305 7.28855 8.92829C5.88838 8.22354 4.68424 7.18345 3.78336 5.90065C3.78336 5.90065 0.216642 13.9258 8.24175 17.4925C6.40536 18.739 4.21775 19.364 2 19.2758C10.0251 23.7342 19.8336 19.2758 19.8336 9.02152C19.8328 8.77315 19.8089 8.52539 19.7622 8.28143C20.6723 7.38395 21.3145 6.25082 21.6169 5.00897Z"
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SVGIcon>
    );
};

export default TwitterOutline;
