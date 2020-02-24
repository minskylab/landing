import React, { FC } from "react";
import { styled } from "linaria/react";

interface MinskyTopBarContainerProps {
    showing?: boolean;
}

const MinskyTopBarContainer = styled.div<MinskyTopBarContainerProps>`
    position: ${props => (props.showing ? "fixed" : "fixed")};
    top: ${props => (props.showing ? "0em" : "-4em")};
    opacity: ${props => (props.showing ? "100%" : "0")};
    left: 0;
    width: 100%;
    height: 4em;
    background-color: #ffffff;
    transition: 0.1s;
`;

interface MinskyTopBarProps {
    active: boolean;
    children?: any;
}
const MinskyTopBar: FC<MinskyTopBarProps> = (props: MinskyTopBarProps) => {
    return <MinskyTopBarContainer showing={props.active}>{props.children}</MinskyTopBarContainer>;
};

export default MinskyTopBar;
