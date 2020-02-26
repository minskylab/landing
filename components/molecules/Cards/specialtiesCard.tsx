import React, {FC} from 'react';
import { Grid } from '../../atoms/Grid/v2';
import { Text } from '../../atoms/Text';
import { TextTypes } from '../../atoms/Text/constants';
import { CardWrapper } from "./constants"

export interface SpecialtiesProps {
    image?: any,
    title: string,
    topics: string[],
    iconTopic: any,
}

const SpecialtiesCards:FC<SpecialtiesProps> = (props: SpecialtiesProps) => {

    return (
        <CardWrapper>
            <Grid rowsTemplate={{parts:3,size:"auto"}} type="grid" colsTemplate={{parts:1}} justifyItems="start" p={{all:"2em"}}> 
                <Grid rows={{from:1,how:1}} cols={{from:1,how:1}} type="flex">
                        {props.image} 
                </Grid>
                <Grid rows={{from:2,how:1}} cols={{from:1,how:1}} type="flex">
                    <Text type={TextTypes.h2}> {props.title} </Text> 
                </Grid>
                <Grid rows={{from:3,how:1}} cols={{from:1,how:1}} type="block">
                    {props.topics.map(values=>{
                        return <Text type={TextTypes.h6} style={{margin:"3px"}}>{props.iconTopic + " " + values}</Text>   
                    })}
                </Grid>
            </Grid>
        </CardWrapper>
    )
}


export {SpecialtiesCards};