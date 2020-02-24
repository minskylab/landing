import React, { FC } from "react";
import { styled } from "linaria/react";

interface TopBarContainerProps {
    showing?: boolean;
}

const TopBarContainer = styled.div<TopBarContainerProps>`
    position: ${props => (props.showing ? "fixed" : "fixed")};
    top: ${props => (props.showing ? "0em" : "-4em")};
    opacity: ${props => (props.showing ? "100%" : "0")};
    left: 0;
    width: 100%;
    height: 4em;
    background-color: #ffffff;
    transition: 0.1s;
`;

interface TopBarProps {
    active: boolean;
    children?: any;
}
const TopBar: FC<TopBarProps> = (props: TopBarProps) => {
    return <TopBarContainer showing={props.active}>{props.children}</TopBarContainer>;
};

export default TopBar;
