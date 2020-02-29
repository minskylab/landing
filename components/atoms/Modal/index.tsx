import React, { FC, ReactElement } from "react";
import Grid from "../Grid/v2";
import { styled } from "linaria/react";
import { css } from "linaria";
import { useSpring, animated } from "react-spring";

const background = css`
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #1b1b1baa;
    justify-content: center;
`;

interface ModalProps {
    title?: string;
    content?: ReactElement;
    children?: ReactElement;
    active?: boolean;
}

const Modal: FC<ModalProps> = (props: ModalProps) => {
    const backProps = useSpring({
        opacity: props.active ? 1 : 0,
        zIndex: props.active ? 1 : -10,
        from: { opacity: 0 }
    });

    // const corpusProps = useSpring({
    //     transform: props.active ? "translateY(0)" : "translateY(100vh)"
    // });
    return (
        <animated.div className={background} style={backProps}>
            {props.active ? props.content || props.children : null}
        </animated.div>
    );
};

export default Modal;
