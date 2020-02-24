import React, { FC } from 'react';
import { styled } from 'linaria/react';

import { Grid } from "../../atoms/Grid/v2/index";
import { Text } from "../../atoms/Text/index";
import { TextTypes } from "../../atoms/Text/constants"
import Body from "../../atoms/Text/Body";

const Wrapper = styled.div<Values>`
    height: ${props => props.mobile ? "13rem" : "20rem"};
    width:${props => props.mobile ? "20rem" : "16rem"};;
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 16px -6px rgba(0,0,0,0.51);
    -moz-box-shadow: 0px 0px 16px -6px rgba(0,0,0,0.51);
    box-shadow: 0px 0px 16px -6px rgba(0,0,0,0.51);
`


interface Values {
    mobile?: boolean;
    icon: any;
    body: string;
    title: string;
}

const Card: FC<Values & React.AllHTMLAttributes<any>> = (props: Values & React.AllHTMLAttributes<any>) => {

    const DEBUG_MODE = false;
    return (
        <Wrapper {...props} as="div">
            <Grid debug={DEBUG_MODE} rows={{ from: 2, how: 1 }} cols={{ from: 2, how: 1 }}>
                <Grid
                    debug={DEBUG_MODE}
                    m={props.mobile ? { x: "1.5em", y: "2em" } : { x: "3em", y: "2em" }}>
                    {props.mobile ? <Grid type={props.mobile ? "flex" : "none"} >
                        <div style={{alignSelf:"center", marginRight: "1em"}}> {props.icon} </div>
                        <Text type={TextTypes.h3}> {props.title} </Text>
                    </Grid> : (
                            <div>
                                <div> {props.icon} </div>
                                <Text type={TextTypes.h3}> {props.title} </Text>
                            </div>
                        )
                    }

                    <Grid
                        debug={DEBUG_MODE}
                        type={"flex"}>
                        <Body>{props.body}</Body>
                    </Grid>
                </Grid>
            </Grid>
        </Wrapper>
    )
}


export { Card };