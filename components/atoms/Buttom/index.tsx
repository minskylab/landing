import React, { FC } from "react";

import { styled } from "linaria/react";
import {ButtonType} from "./constants";


const CustomButton = (props: ButtonType) => styled.button`
    width: 100px;
    height: 35px;
    background: yellow;
    border-radius: 5px;
`;

interface ButtonProps{
    type: ButtonType;

}
const Button: FC<ButtonType & React.HTMLAttributes<any>> = (props: ButtonType & React.HTMLAttributes<any>) => {
    const B = CustomButton(props)
    return <B {...props} />
};


export {Button};