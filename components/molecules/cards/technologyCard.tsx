import React, { FC } from 'react';
import { styled } from 'linaria/react';

import { Grid } from "../../atoms/Grid/v2/index";
import Body from "../../atoms/Text/Body";
import { Text } from "../../atoms/Text/index";
import { TextTypes } from "../../atoms/Text/constants"

import {Values, Wrapper , MiniWrapper} from "./serviceCard";

const CardTechnology: FC<Values > = (props: Values ) => {

    const DEBUG_MODE = false;
    return (
        <Wrapper {...props} as="div" height={"12em"}>
            <Grid type={"grid"}
                    columnsTemplate={{parts:2}}
                    p={{x:"1em",y:"2em"}}
                    gridAutoFlow={"row"}>
                <MiniWrapper height={"12em"}>
                    <Grid gridAutoFlow={"row"} rowsTemplate={{parts:2}}>
                        <MiniWrapper height="5em" style={{display:"flex", alignItems:"center"}}>
                         <Text type={TextTypes.h2}> {props.title}</Text>  
                        </MiniWrapper>
                        <MiniWrapper height="5em">
                         <Body>  {props.body} </Body>   
                        </MiniWrapper>
                    </Grid>
                </MiniWrapper>
                <MiniWrapper height={"12em"}>
                        <MiniWrapper height="4em"></MiniWrapper>
                        <MiniWrapper height="4em" style={{justifyContent:"flex-end", display:"flex"}}>{props.icon}</MiniWrapper>
                        <MiniWrapper height="4em"></MiniWrapper>
                </MiniWrapper>
         
            </Grid>
        </Wrapper>
    )
}
export { CardTechnology };