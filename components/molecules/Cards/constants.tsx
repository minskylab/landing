import React from "react";
import { styled } from "linaria/react";

export const CardWrapper = styled.div`
    border-radius: 0.8em;
    transition: 0.2s ease-in-out;
    &:hover {
        transform: translateY(-5px);
        -webkit-box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.51);
        -moz-box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.51);
        box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.51);
    }
`;

export const Wrapper = styled.div<Values>`
    height: ${props => (props.height ? props.height : "21rem")};
    width: 100%;
    border-radius: 15px;
    transition: 0.6s ease-in-out;
    &:hover {
        transform: translate(5px, 5px);
        -webkit-box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.51);
        -moz-box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.51);
        box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.51);
    }
`;

export const GlobalWrapper = styled.div`
    width: 100%;
`;

export const MiniWrapper = styled.div<Values & React.AllHTMLAttributes<any>>`
    height: ${props => (props.height ? props.height : "6rem")};
    width: 100%;
`;
export interface Values {
    mobile?: boolean;
    icon?: any;
    body?: string;
    title?: string;
    height?: string;
}

export type ContentServiceCards = {
    icon: any;
    title: string;
    body: string;
};