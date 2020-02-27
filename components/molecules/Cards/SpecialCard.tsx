import React, { FC } from "react";
import { Grid } from "../../atoms/Grid/v2";
import { CardWrapper } from "./constants";
import { Subtitle, Simple } from "../../atoms/Text/v2";

export interface SpecialProps {
    image?: any;
    title: string;
    topics: string[];
    iconTopic: any;
}

const SpecialCard: FC<SpecialProps> = (props: SpecialProps) => {
    return (
        <CardWrapper>
            <Grid
                rowsTemplate={{ parts: 3, size: "auto" }}
                type="grid"
                colsTemplate={{ parts: 1 }}
                justifyItems="start"
                p={{ all: "1.8em" }}
            >
                <Grid rows={{ from: 1, how: 1 }} cols={{ from: 1, how: 1 }} type="flex" justifySelf="center">
                    {props.image}
                </Grid>
                <Grid rows={{ from: 2, how: 1 }} cols={{ from: 1, how: 1 }} type="flex" m={{ bottom: "1.4rem" }}>
                    <Subtitle bold>{props.title}</Subtitle>
                </Grid>
                <Grid rows={{ from: 3, how: 1 }} cols={{ from: 1, how: 1 }} type="block">
                    {props.topics.map((values, key) => {
                        return (
                            <div
                                key={key}
                                style={{
                                    display: "flex",
                                    alignItems: "start",
                                    alignContent: "center",
                                    marginBottom: "1rem"
                                }}
                            >
                                <div style={{ paddingRight: "0.6rem", transform: "translateY(-2.5px)" }}>
                                    {props.iconTopic}
                                </div>
                                <Simple>{values}</Simple>
                            </div>
                        );
                    })}
                </Grid>
            </Grid>
        </CardWrapper>
    );
};

export { SpecialCard };
