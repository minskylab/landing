import React from "react";
import { VerticalCard } from "../../molecules/cards/serviceCard";
import { ContentServiceCards } from "../../molecules/cards/constants";
import { Grid } from "../../atoms/Grid/v2";


import { Text } from "../../atoms/Text/index";
import { TextTypes } from "../../atoms/Text/constants";

const DEBUG = false;

export const CardServices = () => {
    const items: ContentServiceCards[] = [
        { icon: <img src="/images/ideation.png" alt="Ideation" />, title: "Ideation and Strategy", body: "We offer experience  in building a new product" },
        { icon: <img src="/images/ideation.png" alt="Ideation" />, title: "Product Design", body: "We will create a beufiful and working design for your idea." },
        { icon: <img src="/images/ideation.png" alt="Ideation" />, title: "Web and Mobile Development", body: "We specialise in delivering end-to-end services." },
        { icon: <img src="/images/ideation.png" alt="Ideation" />, title: "DevOps and Cloud", body: "We use modern microservices approach for your software." }
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
                        gridAutoFlow={"row"}
                        rowsTemplate={{ parts: 1, size: "auto" }}
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
