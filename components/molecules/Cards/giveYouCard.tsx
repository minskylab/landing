import React, {FC} from 'react';
import Grid from '../../atoms/Grid/v2';
import { Text } from '../../atoms/Text';
import { TextTypes } from '../../atoms/Text/constants';



export interface GiveUProps {
    title: string,
    icon: any,
    body:string,
}

const GiveYouCards: FC<GiveUProps> = (props: GiveUProps) => {

    return (
        <Grid type="grid" colsTemplate={{parts:2,size:"auto"}} rowsTemplate={{parts:2,size:"auto"}}>
            <Grid rows={{from:1,how:1}} cols={{from:1,how:1}} type="block" justifySelf="end" alignSelf="center" m={{right:"2em"}}>
                {props.icon}
            </Grid>
            <Grid rows={{from:1,how:1}} cols={{from:2,how:1}} type="flex">
                <Text type={TextTypes.subtitle}> {props.title} </Text>
            </Grid>
            <Grid rows={{from:2,how:1}} cols={{from:2,how:1}} type="flex">
                <Text type={TextTypes.simple}> {props.body}</Text>
            </Grid>
        </Grid>
    )

}

export {GiveYouCards};