import React from "react";
import { HorizontalCard } from "../../../components/molecules/cards/technologyCard";
import { Grid } from "../../../components/atoms/Grid/v2";

import { Text } from "../../../components/atoms/Text/index";
import { TextTypes } from "../../../components/atoms/Text/constants";
import { ContentServiceCards, GlobalWrapper, MiniWrapper } from "../../molecules/cards/constants";

const DEBUG = false;

export const CardTechnologys = () => {
    const items: ContentServiceCards[] = [
        { icon: "as", title: "Chatbots", body: "Multichannel technology." },
        { icon: "as", title: "Payment", body: "Multi payment gateway." },
        { icon: "as", title: "Just for fun", body: "Developing everything." }
    ];
    //USE MOBILE === true ? "BLOCK" : "FLEX" LINE 49 ON "TYPE"
    return (
        <GlobalWrapper>
            <Grid type={"flex"} rows={{ raw: "1" }} debug={DEBUG}>
                <MiniWrapper height={"7em"}>
                    <Text type={TextTypes.h4}> Our Technology </Text>
                </MiniWrapper>
            </Grid>
            <Grid type={"flex"} debug={DEBUG} colsTemplate={{ parts: 2 }} >
                <MiniWrapper height={"auto"} style={{ width: "70%" }}>
                    <Grid m={{ top: "2em" }} type={"grid"} rowGap="0.1em" columnGap="0.5em" rowsTemplate={{ parts: 3, size: "1fr" }} colsTemplate={{parts:1}}>
                        {items.map(value => {
                            return (
                                <HorizontalCard
                                    title={value.title}
                                    body={value.body}
                                    icon={value.icon}
                                ></HorizontalCard>
                            );
                        })}
                    </Grid>
                </MiniWrapper>
                <MiniWrapper height={"23em"} style={{ width: "100%" }}></MiniWrapper>
            </Grid>
        </GlobalWrapper>
    );
};
