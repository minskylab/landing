import React from "react";
import { TechCards } from "../../molecules/Cards/technologyCard";
import { Grid } from "../../../components/atoms/Grid/v2";

import { Text } from "../../../components/atoms/Text/index";
import { TextTypes } from "../../../components/atoms/Text/constants";
import { ContentServiceCards } from "../../molecules/Cards/constants";

const DEBUG = false;

const Technologys = () => {
    const items: ContentServiceCards[] = [
        { icon: "as", title: "Chatbots", body: "Multichannel technology. Excepteur incididunt amet aliquip anim non tempor laborum qui proident." },
        { icon: "as", title: "Payment", body: "Multi payment gateway. Pariatur incididunt consectetur esse et ut tempor tempor sit occaecat ex." },
        { icon: "as", title: "Just for fun", body: "Developing everything. Ex excepteur id enim eu est commodo sint sunt eiusmod tempor." }
    ];
    return (
        <Grid debug={DEBUG} rowsTemplate={{ parts: 2, size:"auto" }}  colsTemplate={[{parts:1, size:"auto"},{parts:2, size:"1fr"},{parts:2, size:"1fr"}]} type={"grid"}>
            <Grid rows={{from:1,how:1}} cols={{from:1,how:1}} type={"block"}>
                <Text alignText="start" type={TextTypes.title}>
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