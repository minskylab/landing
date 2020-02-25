import React, { FC } from "react";

import { Grid } from "../../atoms/Grid/v2/index";
import Body from "../../atoms/Text/Body";
import { Text } from "../../atoms/Text/index";
import { TextTypes } from "../../atoms/Text/constants";

import { Values } from "./constants";
import { useSpring, animated, OpaqueInterpolation, InterpolationConfig } from "react-spring";


import { css } from "linaria";

const wrapperServiceCard = css`
    border-radius: 0.8em;
    transition: box-shadow 0.1s;
    &:hover {
        transform: translateY(-5px);
        -webkit-box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.51);
        -moz-box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.51);
        box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.51);
    }
    will-change: transform;
`;

const DEBUG_MODE = false;

const VerticalCard: FC<Values> = (props: Values) => {
    const calc = (x: number, y: number): Array<number> => [
        -(y - window.innerHeight / 2) / 20,
        (x - window.innerWidth / 2) / 20,
        1.1
    ];

    // @ts-ignore
    const trans: InterpolationConfig<number[], string> = (x: number, y: number, s: number): string =>
        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
    const [transAnimation, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 }
    }));

    return (
        <animated.div
            className={wrapperServiceCard}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: transAnimation.xys.interpolate(trans) }} // "translate(10, 10)" }} //
        >
            <Grid
                debug={DEBUG_MODE}
                type={"grid"}
                colsTemplate={[
                    { parts: 2, size: "auto" },
                    { parts: 1, size: "1fr" }
                ]}
                rowsTemplate={[
                    { parts: 2, size: "auto" },
                    { parts: 3, size: "1fr" }
                ]}
                p={[{ all: "1em" }, { all: "2em" }]}
            >
                <Grid
                    debug={DEBUG_MODE}
                    type={"flex"}
                    alignItems="flex-end"
                    cols={[
                        { from: 1, how: 1 },
                        { from: 1, how: 1 }
                    ]}
                    rows={[
                        { from: 1, how: 2 },
                        { from: 1, how: 1 }
                    ]}
                >
                    {props.icon}
                </Grid>
                <Grid
                    debug={DEBUG_MODE}
                    type={"flex"}
                    cols={[
                        { from: 2, how: 1 },
                        { from: 1, how: 1 }
                    ]}
                    rows={[
                        { from: 1, how: 1 },
                        { from: 2, how: 1 }
                    ]}
                    p={{ right: props.title.length < 16 ? "4rem" : "2.2rem" }}
                >
                    <Text type={TextTypes.h3}>{props.title}</Text>
                </Grid>
                <Grid
                    debug={DEBUG_MODE}
                    type={"flex"}
                    cols={[
                        { from: 2, how: 1 },
                        { from: 1, how: 1 }
                    ]}
                    rows={[
                        { from: 2, how: 1 },
                        { from: 3, how: 1 }
                    ]}
                >
                    <Body> {props.body} </Body>
                </Grid>
            </Grid>
        </animated.div>
    );
};

export { VerticalCard };
