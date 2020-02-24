import React, { FC } from "react";

import { Grid } from "../../atoms/Grid/v2/index";
import Body from "../../atoms/Text/Body";
import { Text } from "../../atoms/Text/index";
import { TextTypes } from "../../atoms/Text/constants";

import { Values, CardWrapper } from "./constants";

const DEBUG_MODE = false;
const VerticalCard: FC<Values> = (props: Values) => {
    return (
        <CardWrapper>
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
        </CardWrapper>
    );
};

export { VerticalCard };
