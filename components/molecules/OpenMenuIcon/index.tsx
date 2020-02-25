import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import * as flubber from "flubber";
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

const burgerPath = "M3 12H21 M3 6H21 M3 18H21Z";
const upArrowPath = "M11.9252 21.9046V1.95654M11.9252 1.95654L1.95117 11.9306M11.9252 1.95654L21.8993 11.9306Z";
const interpolator = flubber.interpolate(burgerPath, upArrowPath);

interface OpenMenuIconProps {
    initial?: "menu" | "arrow";
    state: "menu" | "arrow";
    onClick?: () => void;
}
const OpenMenuIcon = (props: OpenMenuIconProps) => {
    const [path, setPath] = useSpring(() => ({ t: props.initial === "menu" ? 0 : 1 }));

    useEffect(() => {
        props.state === "menu" && setPath({ t: 0 });
        props.state === "arrow" && setPath({ t: 1 });
    }, [props.state]);

    return (
        <ButtonWrap onClick={props.onClick}>
            <animated.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setPath({ t: 1 })}
            >
                <animated.path
                    d={path.t.interpolate(interpolator)}
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </animated.svg>
        </ButtonWrap>
    );
};

export default OpenMenuIcon;
