import React, { FC } from 'react';
import { styled } from 'linaria/react';

import { Grid } from "../../atoms/Grid/v2/index";
import Body from "../../atoms/Text/Body";
import { Text } from "../../atoms/Text/index";
import { TextTypes } from "../../atoms/Text/constants"

import {Values, Wrapper , MiniWrapper} from "./constants";

const HorizontalCard: FC<Values > = (props: Values ) => {

    const DEBUG_MODE = false;
    return (
        <Wrapper {...props} as="div" height={"6em"}>
            <Grid 
                    debug={DEBUG_MODE}
                    type={"grid"}
                    columnsTemplate={{parts:2}}
                    p={{y:"2em"}}
                    gridAutoFlow={"row"}>
                <MiniWrapper height={"6em"}>
                    <Grid gridAutoFlow={"row"} rowsTemplate={{parts:2}} debug={DEBUG_MODE}>
                        <MiniWrapper height="2.5em" style={{display:"flex", alignItems:"start"}}>
                         <Text type={TextTypes.h2}> {props.title}</Text>  
                        </MiniWrapper>
                        <MiniWrapper height="2.5em" style={{display:"flex", alignItems:"center"}}>
                         <Body>  {props.body} </Body>   
                        </MiniWrapper>
                    </Grid>
                </MiniWrapper>
                <MiniWrapper height={"6em"}>
                        <MiniWrapper height="2em"></MiniWrapper>
                        <MiniWrapper height="2em" style={{justifyContent:"flex-end", display:"flex", alignItems:"center"}}>{props.icon}</MiniWrapper>
                        <MiniWrapper height="2em"></MiniWrapper>
                </MiniWrapper>
         
            </Grid>
        </Wrapper>
    )
}
export { HorizontalCard };