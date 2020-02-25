import React, { FC, ReactElement } from "react";
import { SVGIconProps } from "../Icon/SVGIcon";
import { styled } from "linaria/react";

const ButtonWrap = styled.div`
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    background-color: transparent;
    align-items: center;
    display: flex;
    justify-content: center;
    :hover {
        cursor: pointer;
        background-color: #f0f0f0;
    }

    transition: 0.3s;
`;

interface ButtonIconProps {
    icon: FC<SVGIconProps>;
    onClick?: () => void;
}

const ButtonIcon: FC<ButtonIconProps> = (props: ButtonIconProps) => {
    return <ButtonWrap onClick={props.onClick}>{<props.icon />}</ButtonWrap>;
};

export default ButtonIcon;
