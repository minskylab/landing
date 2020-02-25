import React, {FC} from 'react';
import {Grid} from '../Grid/v2/index';
import { Text } from '../Text';
import { TextTypes } from '../Text/constants';


interface Title {
    title?: string;
}
const Section: FC<React.AllHTMLAttributes<any>> = (props: Title & React.AllHTMLAttributes<any>) => {
    return(
        <Grid rowsTemplate={{parts:2}} colsTemplate={{parts:1}} p={{all:"4em"}} >
            <Grid rows={{from:1,how:1}}>
                <Text alignText="start" type={TextTypes.h4}>
                    {props.title}
                </Text>
            </Grid>
            <Grid rows={{from:2,how:1}}>
                    {props.children}
            </Grid>
        </Grid>
    )
}

export {Section};