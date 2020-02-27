import React, { FC } from "react";

import { Grid } from "../../atoms/Grid/v2/index";

import { Subtitle, Simple } from "../../atoms/Text/v2";
import ArrowRightOutline from "../../atoms/Icon/ArrowRightOutline";
import ColorTypes from "../../atoms/Colors";
import { styled } from "linaria/react";

const Wrapper = styled.div`
    border-radius: 0.6em;
    transition: 0.2s ease-in-out;

    :hover {
        transform: translateY(-5px);
        -webkit-box-shadow: 0.895385px 3.58154px 13.4308px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0.895385px 3.58154px 13.4308px rgba(0, 0, 0, 0.1);
        box-shadow: 0.895385px 3.58154px 13.4308px rgba(0, 0, 0, 0.1);
    }
`;

interface TechCardProps {
    title: string;
    description: string;
}

const TechCard: FC<TechCardProps> = (props: TechCardProps) => {
    return (
        <Wrapper>
            <Grid
                type={"grid"}
                colsTemplate={{ parts: 2, size: "auto" }}
                rowsTemplate={{ parts: 2, size: "auto" }}
                p={{ x: "1em", y: "1em" }}
                rowGap="0"
            >
                <Grid type="flex" cols={{ from: 1, how: 1 }} rows={{ from: 1, how: 1 }} alignContent={"end"}>
                    <Subtitle>{props.title}</Subtitle>
                </Grid>
                <Grid
                    p={{ top: "0.5em" }}
                    type="block"
                    cols={{ from: 1, how: 1 }}
                    rows={{ from: 2, how: 1 }}
                    alignItems="start"
                >
                    <Simple>{props.description}</Simple>
                </Grid>
                <Grid
                    type="flex"
                    cols={{ from: 2, how: 1 }}
                    rows={{ from: 1, how: 2 }}
                    justifyContent="flex-end"
                    alignItems="center"
                    m={{ left: "3rem" }}
                >
                    <ArrowRightOutline color={ColorTypes.black._50} />
                </Grid>
            </Grid>
        </Wrapper>
    );
};
export { TechCard };
