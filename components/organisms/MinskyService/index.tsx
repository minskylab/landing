import React from "react";
import { VerticalCard } from "../../molecules/Cards/serviceCard";
import { ContentServiceCards } from "../../molecules/Cards/constants";
import { Grid } from "../../atoms/Grid/v2";


import { Text } from "../../atoms/Text/index";
import { TextTypes } from "../../atoms/Text/constants";

const DEBUG = false;

const Services = () => {
    const items: ContentServiceCards[] = [
        { icon: <img src="/images/ideation.png" alt="Ideation" height="48px" width="48px"/>, title: "Ideation and Strategy", body: "We offer experience  in building a new product" },
        { icon: <img src="/images/design.png" alt="Design" height="48px" width="48px" />, title: "Product Design", body: "We will create a beufiful and working design for your idea." },
        { icon: <img src="/images/development.png" alt="Development" height="48px" width="48px"/>, title: "Web and Mobile Development", body: "We specialise in delivering end-to-end services." },
        { icon: <img src="/images/devOps.png" alt="DevOps" height="48px" width="48px" />, title: "DevOps and Cloud", body: "We use modern microservices approach for your software." }
    ];
    return (

            <Grid debug={DEBUG} rowsTemplate={[{ parts: 2 }]} type={"block"}>
                    <Grid rows={{from:1,how:1}} cols={{from:1,how:1}} type={"block"}>
                        <Text alignText="start" type={TextTypes.h4}>
                            Our services
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
                        columnGap="2.8em"
                        rowGap = "1em"
                        p={{ x: "2em", y: "2em" }}
                        debug={DEBUG}
                    >
                        {items.map(value => {
                            return (
                                <VerticalCard body={value.body} icon={value.icon} title={value.title}></VerticalCard>
                            );
                        })}
                    </Grid>
            </Grid>

    );
};


export {Services};