import React from 'react';
import { Card } from "../../molecules/cards";
import { Grid } from "../../atoms/Grid/v2";
import { styled } from 'linaria/react';

import { Text } from "../../atoms/Text/index";
import { TextTypes } from "../../atoms/Text/constants"


const Wrapper = styled.div`
    width:100%;
    height: 30rem;
`
const TitleWrapper = styled.div`
    width: 100%; 
    height: 2.6em;
`
const BodyWrapper = styled.div`
    width: 100%; 
    height: 25em;
`

const DEBUG = false;

export type ContentServiceCards = {
    icon:any; 
    title: string;
    body:string;
}


export const CardServices = () => {
    const items: ContentServiceCards[] = [
        {icon: "as", title:"Ideation and Strategy", body: "We offer experience  in building a new product"},
        {icon: "as", title:"Product Design", body:"We will create a beufiful and working design for your idea."},
        {icon: "as", title:"Web and Mobile Development", body:"We specialise in delivering end-to-end services." },
        {icon: "as", title:"DevOps and Cloud", body:"We use modern microservices approach for your software."}
    ]
    //USE MOBILE === true ? "BLOCK" : "FLEX" LINE 49 ON "TYPE"
    return(
        <Wrapper>
            <Grid debug={DEBUG} rowsTemplate={[{parts:3}]} type={"block"} >
                <TitleWrapper>
                    <Text alignText="start" type={TextTypes.h4}> Our services </Text>
                </TitleWrapper>
                <BodyWrapper>
                    <Grid columnsTemplate={[{parts:4}]} type={"flex"} p={{x:"2em"}} debug={DEBUG}>
                        {
                            items.map(value=>{
                                return <Card body={value.body} icon={value.icon} title={value.title} ></Card>
                            })
                        }
                    </Grid>
                </BodyWrapper>
            </Grid>
        </Wrapper>
    )
}