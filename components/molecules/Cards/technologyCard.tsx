import React, { FC } from "react";


import { Grid } from "../../atoms/Grid/v2/index";
import Body from "../../atoms/Text/Body";
import { Text } from "../../atoms/Text/index";
import { TextTypes } from "../../atoms/Text/constants";

import { Values, CardWrapper } from "./constants";

const DEBUG_MODE = false;

const TechCards: FC<Values> = (props: Values) => {
    return (
        <CardWrapper {...props} as="div">
            <Grid debug={DEBUG_MODE} type={"grid"} colsTemplate={{ parts: 2,size:"auto" }} rowsTemplate={{parts:2, size:"auto"}} p={{x:"2em",y:"1em"}}>
                <Grid debug={DEBUG_MODE} type="flex" cols={{from:1, how:1}} rows={{from:1, how:1}} alignContent="flex-end"> 
                    <Text type={TextTypes.h3}>{props.title} </Text >
                </Grid>
                <Grid debug={DEBUG_MODE} type="block" cols={{from:1, how:1}} rows={{from:2, how:1}} alignItems="start"> 
                    <Body> {props.body} </Body>
                </Grid>
                <Grid debug={DEBUG_MODE} type="flex" cols={{from:2, how:1}} rows={{from:1, how:2}}  justifyContent="flex-end" alignItems="center" m={{left:"3rem"}}> 
                        {props.icon} 

                </Grid>     
            </Grid>
        </CardWrapper>
    );
};
export { TechCards };
