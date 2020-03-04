import React, { FC, ReactElement } from "react";
import Grid from "../Grid/v2";
import { styled } from "linaria/react";
import { css } from "linaria";
import { useSpring, animated } from "react-spring";

const background = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #1b1b1baa;
    justify-content: center;

    /* z-index: 200; */
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
        // zIndex: props.active ? 12 : -1,
        from: { opacity: 0 }
    });

    return (
        <animated.div className={background} style={{ ...backProps, zIndex: props.active ? 12 : -1 }}>
            {props.active ? props.content || props.children : null}
        </animated.div>
    );
};

export default Modal;
