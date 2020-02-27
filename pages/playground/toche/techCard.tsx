import React from "react";

import { styled } from "linaria/react";

import { Image } from "../../../components/atoms/Images/img";
import { TechCard } from "../../../components/molecules/Cards/TechCard";

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
        <TechCard
            icon="as"
            title="Payment"
            body="Multi payment gateway. Consequat reprehenderit incididunt incididunt officia tempor aliqua ad aliquip ipsum aute in in dolor velit."
        ></TechCard>
    );
};

export default Playground;
