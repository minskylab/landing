import React from "react";
import { HorizontalCard } from "../../../components/molecules/cards/technologyCard";
import { Grid } from "../../../components/atoms/Grid/v2";
import { styled } from "linaria/react";

import { Text } from "../../../components/atoms/Text/index";
import { TextTypes } from "../../../components/atoms/Text/constants";
import { MiniWrapper } from "../../../components/molecules/cards/constants";

const Wrapper = styled.div`
    width: 100%;
    height: 30rem;
`;

const DEBUG = false;

export type ContentServiceCards = {
    icon: any;
    title: string;
    body: string;
};

const Playground = (props: React.AllHTMLAttributes<any>) => {
    const items: ContentServiceCards[] = [
        { icon: "as", title: "Chatbots", body: "Multichannel technology." },
        { icon: "as", title: "Payment", body: "Multi payment gateway." },
        { icon: "as", title: "Just for fun", body: "Developing everything." }
    ];
    //USE MOBILE ? "BLOCK" : "FLEX" LINE 49 ON "TYPE"
    return (
        <Wrapper>
            <Grid type={"flex"} rows={{ raw: "1" }} debug={DEBUG}>
                <MiniWrapper height={"7em"}>
                    <Text type={TextTypes.h4}> Our Technology </Text>
                </MiniWrapper>
            </Grid>
            <Grid type={"flex"} debug={DEBUG} colsTemplate={{ parts: 2 }}>
                <MiniWrapper height={"23em"} style={{ width: "70%" }}>
                    <Grid m={{ top: "2em" }} type={"block"}>
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
        </Wrapper>
    );
};

export default Playground;
