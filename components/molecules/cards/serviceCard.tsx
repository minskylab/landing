import React, { FC } from "react";

import { Grid } from "../../atoms/Grid/v2/index";
import Body from "../../atoms/Text/Body";
import { Text } from "../../atoms/Text/index";
import { TextTypes } from "../../atoms/Text/constants";

import { Values, Wrapper, MiniWrapper } from "./constants";

const VerticalCard: FC<Values> = (props: Values) => {
    const DEBUG_MODE = false;
    return (
        <Wrapper {...props} as="div">
            <Grid
                debug={DEBUG_MODE}
                type={"block"}
                rowsTemplate={[{ parts: 3 }]}
                p={[{ y: "3em", top: "0.5em", bottom: "0.5em" }]}
            >
                <MiniWrapper {...props}>
                    <Grid debug={DEBUG_MODE} type={"flex"} colsTemplate={[{ parts: 3 }]}>
                        <MiniWrapper style={{ display: "flex", alignItems: "flex-end" }}>{props.icon}</MiniWrapper>
                    </Grid>
                </MiniWrapper>
                <MiniWrapper {...props}>
                    <Grid debug={DEBUG_MODE} type={"flex"} colsTemplate={[{ parts: 3 }]}>
                        <MiniWrapper>
                            <Text type={TextTypes.h3}>{props.title}</Text>
                        </MiniWrapper>
                    </Grid>
                </MiniWrapper>
                <MiniWrapper {...props}>
                    <Grid debug={DEBUG_MODE} type={"flex"} colsTemplate={[{ parts: 3 }]}>
                        <MiniWrapper>
                            <Body> {props.body} </Body>
                        </MiniWrapper>
                    </Grid>
                </MiniWrapper>
            </Grid>
        </Wrapper>
    );
};

export { VerticalCard };
