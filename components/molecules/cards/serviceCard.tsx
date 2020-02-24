import React, { FC } from "react";

import { Grid } from "../../atoms/Grid/v2/index";
import Body from "../../atoms/Text/Body";
import { Text } from "../../atoms/Text/index";
import { TextTypes } from "../../atoms/Text/constants";

import { Values, Wrapper, MiniWrapper } from "./constants";

const VerticalCard: FC<Values> = (props: Values) => {
    const DEBUG_MODE = false;
    return (
        <Wrapper {...props} as="div" height={"auto"}>
            <Grid
                debug={DEBUG_MODE}
                type={"block"}
                rowsTemplate={[{ parts: 3 }]}
                p={[{ all:"2em" }]}
            >
                    <Grid debug={DEBUG_MODE} type={"flex"}>
                        {props.icon}
                    </Grid>

                <MiniWrapper {...props}>
                    <Grid debug={DEBUG_MODE} type={"flex"} colsTemplate={[{ parts: 3 }]}>
                        <MiniWrapper>
                            <Text type={TextTypes.h3}>{props.title}</Text>
                        </MiniWrapper>
                    </Grid>
                </MiniWrapper>
                <MiniWrapper {...props}>
                    <Grid debug={DEBUG_MODE} type={"flex"} colsTemplate={[{ parts: 3 }]} m={{top:"0.5rem"}}>
                        <MiniWrapper style={{display:"flex", alignItems:"flex-end"}}>
                            <Body> {props.body} </Body>
                        </MiniWrapper>
                    </Grid>
                </MiniWrapper>
            </Grid>
        </Wrapper>
    );
};

export { VerticalCard };
