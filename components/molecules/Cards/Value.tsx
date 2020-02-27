import React, { FC } from "react";
import Grid from "../../atoms/Grid/v2";
import { Text } from "../../atoms/Text";
import { TextTypes } from "../../atoms/Text/constants";
import { Subtitle, Body } from "../../atoms/Text/v2";

export interface ValueProp {
    title: string;
    icon: any;
    body: string;
}

const Value: FC<ValueProp> = (props: ValueProp) => {
    return (
        <Grid
            type="grid"
            colsTemplate={{ parts: 2, size: "auto" }}
            rowsTemplate={{ parts: 2, size: "auto" }}
            m={[{ x: "0.8rem" }, { left: "0.8rem", right: "2.4rem" }]}
        >
            <Grid
                rows={{ from: 1, how: 1 }}
                cols={{ from: 1, how: 1 }}
                justifySelf="start"
                alignSelf="start"
                m={[
                    { right: "1rem", top: "1rem" },
                    { right: "1em", top: "0.5rem" }
                ]}
            >
                {props.icon}
            </Grid>
            <Grid
                type={"grid"}
                rowGap={"0.8rem"}
                rows={{ from: 1, how: 1 }}
                cols={{ from: 2, how: 1 }}
                justifySelf="end"
                alignSelf="center"
            >
                <Grid rows={{ from: 1, how: 1 }} cols={{ from: 2, how: 1 }} type="block">
                    <Subtitle bold>{props.title}</Subtitle>
                </Grid>
                <Grid rows={{ from: 2, how: 1 }} cols={{ from: 2, how: 1 }} type="block">
                    <Body lineHeight={"1.5em"}>{props.body}</Body>
                </Grid>
            </Grid>
        </Grid>
    );
};

export { Value };
