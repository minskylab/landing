import React,{FC} from 'react';
import {Grid} from '../../atoms/Grid/v2/index';
import { Text } from '../../atoms/Text';
import { TextTypes } from '../../atoms/Text/constants';

import {CardWrapper}from"./constants"

export interface TeamProps{
    name: string,
    img: any,
    email?: string,
    tags?: string[],
    socialNet: any[],
}


const TeamCards: FC<TeamProps> = (props: TeamProps) =>{

    return (
        <CardWrapper>
            <Grid rowsTemplate={{parts:5,size:"1fr"}} colsTemplate={{parts:1,size:"1fr"}} type="grid">
                <Grid rows={{from:1,how:1}} type="flex" cols={{from:1,how:1}} justifyContent="center" alignItems="center">
                    {props.img}
                </Grid>
                <Grid rows={{from:2,how:1}} type="flex" cols={{from:1,how:1}} justifyContent="center" alignItems="center">
                    <Text type={TextTypes.h5}>{props.name}</Text>
                </Grid>
                <Grid rows={{from:3,how:1}} type="flex" cols={{from:1,how:1}} justifyContent="center" alignItems="center">
                    <Text type={TextTypes.simple}> {props.email} </Text> 
                </Grid>
                <Grid rows={{from:4,how:1}} type="flex" cols={{from:1,how:1}}>
                        {
                            props.tags.map(value=>{
                            return <Text type={TextTypes.subtitle}> {"# " + value}</Text>
                            })
                        }
                </Grid>
                <Grid rows={{from:5,how:1}} cols={{from:1,how:1}} type="flex">
                    {
                        props.socialNet.map(value => {
                            return <div>{value}</div>
                        })
                    }
                </Grid>
      
            </Grid>
        </CardWrapper>
    )
}


export {TeamCards};