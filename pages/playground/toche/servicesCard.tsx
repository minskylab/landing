import React from "react";
import { VerticalCard } from "../../../components/molecules/cards/serviceCard";
import { Grid } from "../../../components/atoms/Grid/v2";
import { styled } from "linaria/react";

import { Text } from "../../../components/atoms/Text/index";
import { TextTypes } from "../../../components/atoms/Text/constants";

const Wrapper = styled.div`
    width: 100%;
    height: 30rem;
`;
const TitleWrapper = styled.div`
    width: 100%;
    height: 2.6em;
`;
const BodyWrapper = styled.div`
    width: 100%;
    height: 25em;
`;

const DEBUG = false;

export type ContentServiceCards = {
    icon: any;
    title: string;
    body: string;
};

const Playground = (props: React.AllHTMLAttributes<any>) => {
    const items: ContentServiceCards[] = [
        { icon: "as", title: "Ideation and Strategy", body: "We offer experience  in building a new product" },
        { icon: "as", title: "Product Design", body: "We will create a beufiful and working design for your idea." },
        { icon: "as", title: "Web and Mobile Development", body: "We specialise in delivering end-to-end services." },
        { icon: "as", title: "DevOps and Cloud", body: "We use modern microservices approach for your software." }
    ];
    //USE MOBILE ? "BLOCK" : "FLEX" LINE 49 ON "TYPE"
    return (
        <Wrapper>
            <Grid debug={DEBUG} rowsTemplate={[{ parts: 3 }]} type={"block"}>
                <TitleWrapper>
                    <Text alignText="start" type={TextTypes.h4}>
                        {" "}
                        Our services{" "}
                    </Text>
                </TitleWrapper>
                <BodyWrapper>
                    <Grid colsTemplate={[{ parts: 4 }]} type={"flex"} p={{ x: "2em" }} debug={DEBUG}>
                        {items.map(value => {
                            return (
                                <VerticalCard body={value.body} icon={value.icon} title={value.title}></VerticalCard>
                            );
                        })}
                    </Grid>
                </BodyWrapper>
            </Grid>
        </Wrapper>
    );
};

export default Playground;
