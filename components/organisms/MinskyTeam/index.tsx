import React from  'react';


import {TeamCards} from "../../molecules/Cards/teamCard"
import { Grid } from '../../atoms/Grid/v2';
import { Text } from '../../atoms/Text';
import { TextTypes } from '../../atoms/Text/constants';



const DEBUG = false;
const Team = () => {
    const items = [
        { img: "as", other: "# Backend", body: "# Frontend" ,name:"Antonio Toche", socialNet: ["asdasd","asdasda","asdkdkk"]},
        { img: "as", other: "Payment", body: "# Backend",name:"María Noriega" , socialNet: ["asdasd","asdasda","asdkdkk"]},
        { img: "as", other: "Just for fun", body: "Developing everything.",name:"Bregy Malpartida", socialNet: ["asdasd","asdasda","asdkdkk"] },
        { img: "as", other: "Jsdasdadn", body: "Devsadsdeloping everything.",name:"Carlos Almenara", socialNet: ["asdasd","asdasda","asdkdkk"] },
    ];

    return (     <Grid debug={DEBUG} rowsTemplate={[{ parts: 2 }]} type={"block"}>
    <Grid rows={{from:1,how:1}} cols={{from:1,how:1}} type={"block"}>
    <Text alignText="start" type={TextTypes.h4}>
            Our Team
        </Text>
    </Grid>
    <Grid
        type={"grid"}
        colsTemplate={[
            { parts: 1, size: "1fr" }, // sm
            { parts: 2, size: "1fr" }, // md
            { parts: 4, size: "1fr" } //  lg
        ]}
        rowsTemplate={{ parts: 1, size: "auto" }}
        gridAutoFlow={"row"}
        columnGap="1em"
        p={{ x: "1em", y: "1em" }}
        debug={DEBUG}
    >
        {items.map(value => {
            return (
                <TeamCards body={value.body} img={value.img} other={value.other} name={value.name} socialNet={value.socialNet}></TeamCards>
            );
        })}
    </Grid>
</Grid>)

}


export {Team}