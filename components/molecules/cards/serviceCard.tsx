import React, { FC } from 'react';
import { styled } from 'linaria/react';

import { Grid } from "../../atoms/Grid/v2/index";
import Body from "../../atoms/Text/Body";
import { Text } from "../../atoms/Text/index";
import { TextTypes } from "../../atoms/Text/constants"

export const Wrapper = styled.div<Values>`
    height: ${props => props.height ? props.height : "21rem"};
    width:100%;
    border-radius: 15px;
    transition: 0.6s ease-in-out;
    &:hover{
        transform: translate(5px,5px);
        -webkit-box-shadow: 0px 0px 16px -6px rgba(0,0,0,0.51);
        -moz-box-shadow: 0px 0px 16px -6px rgba(0,0,0,0.51);
        box-shadow: 0px 0px 16px -6px rgba(0,0,0,0.51);
    }

`

export const MiniWrapper = styled.div<Values & React.AllHTMLAttributes<any>>`
    height: ${props => props.height ? props.height :"6rem"};
    width: 100%;
`
export interface Values {
    mobile?: boolean;
    icon?: any;
    body?: string;
    title?: string;
    height?: string;
}

const Card: FC<Values > = (props: Values ) => {

    const DEBUG_MODE = false;
    return (
        <Wrapper {...props} as="div">
            <Grid debug={DEBUG_MODE}  type={"block"} rowsTemplate={[{parts:3}]} p={[{y:"3em",top:"0.5em",bottom:"0.5em"}]}>
                <MiniWrapper {...props}>
                    <Grid debug={DEBUG_MODE}  type={"flex"} columnsTemplate={[{parts:3}]} >
                        <MiniWrapper style={{display:"flex", alignItems:"flex-end"}}>
                            {props.icon}
                        </MiniWrapper>
                    </Grid>
                </MiniWrapper>
                <MiniWrapper {...props}>
                    <Grid debug={DEBUG_MODE}  type={"flex"} columnsTemplate={[{parts:3}]} >
                        <MiniWrapper>
                            <Text type={TextTypes.h3} >{props.title}</Text>
                        </MiniWrapper>

                    </Grid>
                </MiniWrapper>
                <MiniWrapper {...props}>
                    <Grid debug={DEBUG_MODE}  type={"flex"} columnsTemplate={[{parts:3}]} >
                        <MiniWrapper>
                            <Body>    {props.body} </Body>
                        </MiniWrapper>
                    </Grid>
                </MiniWrapper>
            </Grid>
        </Wrapper>
    )
}


export { Card };