import React, { FC } from "react";


import { Grid } from "../../atoms/Grid/v2/index";
import Body from "../../atoms/Text/Body";
import { Text } from "../../atoms/Text/index";
import { TextTypes } from "../../atoms/Text/constants";

import { Values, CardWrapper } from "./constants";

const DEBUG_MODE = false;

const HorizontalCard: FC<Values> = (props: Values) => {
    return (
        <CardWrapper {...props} as="div">
            <Grid debug={DEBUG_MODE} type={"grid"} colsTemplate={{ parts: 2,size:"auto" }} rowsTemplate={{parts:2, size:"auto"}} p={{all:"2em"}}>
                <Grid debug={DEBUG_MODE} type="flex" cols={{from:1, how:1}} rows={{from:1, how:1}}> 
                    <Text type={TextTypes.h4}>{props.title} </Text >
                </Grid>
                <Grid debug={DEBUG_MODE} type="flex" cols={{from:1, how:1}} rows={{from:2, how:1}}> 
                    <Body> {props.body} </Body>
                </Grid>
                <Grid debug={DEBUG_MODE} type="flex" cols={{from:2, how:1}} rows={{from:1, how:1}} justifyContent="flex-end"  alignSelf="end" > 
                    {props.icon} 
                </Grid>     
            </Grid>
        </CardWrapper>
    );
};
export { HorizontalCard };
