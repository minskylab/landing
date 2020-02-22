import React, { FC } from "react";

export interface SVGIconProps {
    width?: number;
    height?: number;
    color?: string;
}

export const MinskyLogo: FC<SVGIconProps> = (props: SVGIconProps) => {
    return (
        <svg
            width={`${props.width || 41}`}
            height={`${props.height || 31}`}
            // viewBox={`0 0 ${props.width || 41} ${props.height || 31}`}
            viewBox="0 0 41 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.9438 29.3729C43.8287 22.8667 42.2814 7.5371 29.9594 2.34797C20.3006 -1.71959 3.09344 2.63999 0.698872 11.1086C-0.211353 14.3277 2.54716 18.0621 6.18885 19.5188C6.88574 19.7975 7.84409 19.8743 8.9593 19.9637C10.648 20.099 12.6963 20.2631 14.7412 21.2009C15.9542 21.7572 17.079 23.324 18.2705 24.9838C19.9986 27.3911 21.8673 29.9941 24.3495 29.9941C25.4921 29.9941 26.7275 30.1356 27.972 30.2781C30.9639 30.6209 34.0087 30.9697 35.9438 29.3729ZM27.041 3.73284C24.7951 2.2239 17.4959 2.57478 16.0572 2.99588C14.2221 3.53298 13.5954 5.07514 13.2404 6.92086C12.9858 8.24472 28.0928 4.43956 27.041 3.73284ZM20.2545 16.0513C22.513 15.5457 34.2097 10.4221 34.4119 9.47822C34.7789 7.76552 32.6456 5.60173 30.131 5.60175C28.5804 5.60175 17.0185 9.47822 16.277 11.231C15.5354 12.9838 18.7526 16.3876 20.2545 16.0513ZM31.1487 28.699C34.0388 29.2129 16.4777 19.9197 19.2061 22.6564C19.9657 23.4184 20.5245 24.2514 21.0468 25.0301C21.7671 26.104 22.4179 27.0744 23.4306 27.6117C24.6076 28.2363 26.1515 28.3113 27.8347 28.3931C28.9027 28.4449 30.0267 28.4996 31.1487 28.699ZM32.2291 26.1807C33.6161 25.6695 34.9554 13.3143 34.5618 12.9479C33.6891 12.1357 21.1702 20.0196 21.1702 20.6433C21.1702 21.185 31.7088 26.3724 32.2291 26.1807ZM35.7525 26.5071C35.3291 26.4434 36.3159 12.4694 36.8398 12.2714C37.405 12.0577 38.6848 13.9103 38.6848 18.6547C38.6848 21.9281 37.0526 26.7027 35.7525 26.5071ZM10.0442 8.68848C10.637 7.79018 11.297 6.02254 11.0739 5.57628C10.7262 4.88093 2.99201 7.92226 2.82973 11.9995C2.76526 13.6193 3.48183 14.6534 4.16499 14.8175C5.04665 15.0294 9.4513 9.58678 10.0442 8.68848ZM15.0555 17.8742C15.4381 16.4711 13.2697 10.3232 12.6629 10.3232C11.733 10.3232 6.75393 16.0047 6.56927 16.9005C6.38462 17.7964 14.6728 19.2773 15.0555 17.8742Z"
                fill={props.color || "#1B1B1B"}
            />
        </svg>
    );
};