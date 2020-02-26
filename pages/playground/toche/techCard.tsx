import React from "react";
import { Grid } from "../../../components/atoms/Grid/v2";
import { styled } from "linaria/react";

import { Text } from "../../../components/atoms/Text/index";
import { TextTypes } from "../../../components/atoms/Text/constants";
import { MiniWrapper } from "../../../components/molecules/Cards/constants";

import { Image } from "../../../components/atoms/Images/img";
import { TechCards } from "../../../components/molecules/Cards/technologyCard";

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
        { icon: <Image path="/images/design.png" />, title: "Chatbots", body: "Multichannel technology." },
        { icon: "as", title: "Payment", body: "Multi payment gateway." },
        { icon: "as", title: "Just for fun", body: "Developing everything." }
    ];
    //USE MOBILE ? "BLOCK" : "FLEX" LINE 49 ON "TYPE"
    return (
        <TechCards icon= "as" title= "Payment" body="Multi payment gateway. Consequat reprehenderit incididunt incididunt officia tempor aliqua ad aliquip ipsum aute in in dolor velit."></TechCards>
    );
};

export default Playground;
