import React,{FC} from 'react';
import {Grid} from '../../atoms/Grid/v2/index';
import { Text } from '../../atoms/Text';
import { TextTypes } from '../../atoms/Text/constants';

import {CardWrapper}from"./constants"

interface TeamProps{
    name: string,
    img: any,
    body: string,
    other?: string,
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
                    <Text type={TextTypes.simple}> {props.body} </Text> 
                </Grid>
                <Grid rows={{from:4,how:1}} type="flex" cols={{from:1,how:1}} justifyContent="center" alignItems="center">
                    <Text type={TextTypes.simple}>  {props.other}</Text> 
                </Grid>
                <Grid rows={{from:5,how:1}} type="flex" cols={{from:1,how:1}} justifyContent="center" alignItems="center">
                    <Grid rowsTemplate={{parts:1,size:"1fr"}} colsTemplate={{parts:props?.socialNet?.length||0,size:"1fr"}}      
                        type={"grid"}
                    >
                    </Grid>
                    {
                        props.socialNet.map((values,index)=>{
                            return <Grid rows={{from:1,how:1}} type="flex" cols={{from:index,how:1}} m={{all:"0.5em"}}>
                                {values}
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
        </CardWrapper>
    )
}


export {TeamCards};