import React, { FC } from "react";
import { styled } from "linaria/react";

import { Grid } from "../../atoms/Grid/v2/index";
import Body from "../../atoms/Text/Body";
import { Text } from "../../atoms/Text/index";
import { TextTypes } from "../../atoms/Text/constants";

import { Values, Wrapper, MiniWrapper } from "./constants";

const HorizontalCard: FC<Values> = (props: Values) => {
    const DEBUG_MODE = true;
    return (
        <Wrapper {...props} as="div" height={"auto"}>
            <Grid debug={DEBUG_MODE} type={"grid"} colsTemplate={{ parts: 2 }} rowsTemplate={{parts:3}}>
                <Grid rows={{from:1,to:2}} cols={{from:1, to:2}}>

                </Grid>
                <Grid rows={{from:2,to:3}} cols={{from:1, to:2}}>

                </Grid>         
                <Grid rows={{from:3,to:4}} cols={{from:2, to:3}}>

                </Grid>
            </Grid>
        </Wrapper>
    );
};
export { HorizontalCard };
