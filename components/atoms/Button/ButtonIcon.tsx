import React, { FC } from "react";
import { SVGIconProps } from "../Icon/SVGIcon";
import { styled } from "linaria/react";

const ButtonWrap = styled.div`
    width: 1.6rem;
    height: 1.6rem;
    background-color: transparent;

    :hover {
        background-color: #f0f0f0;
    }

    transition: 0.3s;
`;

interface ButtonIconProps {
    icon: FC<SVGIconProps>;
    onClick?: () => {};
}

const ButtonIcon: FC<ButtonIconProps> = (props: ButtonIconProps) => {
    return <ButtonWrap onClick={props.onClick}>{props.icon}</ButtonWrap>;
};

export default ButtonIcon;
