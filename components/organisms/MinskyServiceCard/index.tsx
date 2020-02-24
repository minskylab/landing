import React from 'react';
import { VerticalCard } from "../../molecules/cards/serviceCard";
import { ContentServiceCards , GlobalWrapper} from "../../molecules/cards/constants"
import { Grid } from "../../atoms/Grid/v2";
import { styled } from 'linaria/react';

import { Text } from "../../atoms/Text/index";
import { TextTypes } from "../../atoms/Text/constants"


const TitleWrapper = styled.div`
    width: 100%; 
    height: 2.6em;
`
const BodyWrapper = styled.div`
    width: 100%; 
    height: 25em;
`

const DEBUG = false;



export const CardServices = () => {
    const items: ContentServiceCards[] = [
        {icon: "as", title:"Ideation and Strategy", body: "We offer experience  in building a new product"},
        {icon: "as", title:"Product Design", body:"We will create a beufiful and working design for your idea."},
        {icon: "as", title:"Web and Mobile Development", body:"We specialise in delivering end-to-end services." },
        {icon: "as", title:"DevOps and Cloud", body:"We use modern microservices approach for your software."}
    ]
  
    //USE MOBILE === true ? "BLOCK" : "FLEX" LINE 49 ON "TYPE"
    return(
        <GlobalWrapper>
            <Grid debug={DEBUG} rowsTemplate={[{parts:3}]} type={"block"} >
                <TitleWrapper>
                    <Text alignText="start" type={TextTypes.h4}> Our services </Text>
                </TitleWrapper>
                <BodyWrapper>
                    <Grid columnsTemplate={[{parts:4}]} type={"flex"} p={{x:"2em"}} debug={DEBUG}>
                        {
                            items.map(value=>{
                                return <VerticalCard body={value.body} icon={value.icon} title={value.title} ></VerticalCard>
                            })
                        }
                    </Grid>
                </BodyWrapper>
            </Grid>
        </GlobalWrapper>
    )
}