import React, { FC } from "react";

import { Grid } from "../../atoms/Grid/v2/index";
import { Text } from "../../atoms/Text/index";
import { TextTypes } from "../../atoms/Text/constants";

import { useSpring, animated, InterpolationConfig } from "react-spring";

import { css } from "linaria";
import { Body, Subtitle } from "../../atoms/Text/v2";

const wrapperServiceCard = css`
    border-radius: 0.6em;
    transition: box-shadow 0.11s;
    &:hover {
        transform: translateY(-5px);
        -webkit-box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.51);
        -moz-box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.51);
        box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.51);
    }
    will-change: transform;
`;

interface ServiceCardProps {
    title?: string;
    body?: string;
    icon?: any;
}

const ServiceCard: FC<ServiceCardProps> = (props: ServiceCardProps) => {
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
        config: { mass: 5, tension: 350, friction: 35 }
    }));

    return (
        <animated.div
            className={wrapperServiceCard}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: transAnimation.xys.interpolate(trans) }} // "translate(10, 10)" }} //
        >
            <Grid
                type={"grid"}
                colsTemplate={[
                    { parts: 1, size: "auto" },
                    { parts: 1, size: "auto" }
                ]}
                rowsTemplate={[
                    { parts: 2, size: "auto" },
                    { parts: 3, size: "auto" }
                ]}
                p={[{ all: "1.2em" }, { x: "1.2rem", y: "2.8rem" }]}
            >
                <Grid
                    type={"flex"}
                    alignItems={"end"}
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
                    type={"flex"}
                    cols={[
                        { from: 2, how: 1 },
                        { from: 1, how: 1 }
                    ]}
                    rows={[
                        { from: 1, how: 1 },
                        { from: 2, how: 1 }
                    ]}
                    m={{ right: props.title.split(" ").length < 3 ? "7.4rem" : "4rem" }}
                >
                    <Subtitle bold m={{ top: "0.5em", bottom: "1em" }}>
                        {props.title}
                    </Subtitle>
                </Grid>
                <Grid
                    type={"flex"}
                    alignItems={"end"}
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

export { ServiceCard };
