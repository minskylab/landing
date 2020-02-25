import React from "react";
import { TechCards } from "../../molecules/Cards/technologyCard";
import { Grid } from "../../../components/atoms/Grid/v2";

import { Text } from "../../../components/atoms/Text/index";
import { TextTypes } from "../../../components/atoms/Text/constants";
import { ContentServiceCards } from "../../molecules/Cards/constants";

const DEBUG = false;

const Technologys = () => {
    const items: ContentServiceCards[] = [
        { icon: "as", title: "Chatbots", body: "Multichannel technology." },
        { icon: "as", title: "Payment", body: "Multi payment gateway." },
        { icon: "as", title: "Just for fun", body: "Developing everything." }
    ];
    return (
        <Grid debug={DEBUG} rowsTemplate={{ parts: 2, size:"auto" }}  colsTemplate={{parts:3, size:"auto"}} type={"grid"}>
            <Grid rows={{from:1,how:1}} cols={{from:1,how:1}} type={"block"}>
                <Text alignText="start" type={TextTypes.h4}>
                    Our Technology
                </Text>
            </Grid>
            <Grid rows={{from:2,how:1}} cols={{from:1,how:1}} type={"block"}>
                {
                    items.map((value,index)=>{
                        return <TechCards key={index} body={value.body} icon={value.icon} title={value.title}></TechCards>
                    })
                }

            </Grid>
     </Grid>
    );
};


export {Technologys};