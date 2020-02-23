import React from "react";
import { Text } from "../../components/atoms/Text";
import Title from "../../components/atoms/Text/Title";
import { TextTypes } from "../../components/atoms/Text/constants";
import Head from "next/head";
import Subtitle from "../../components/atoms/Text/Subtitle";
import Body from "../../components/atoms/Text/Body";
import { Simple } from "../../components/atoms/Text/Simple";
import { Grid } from "../../components/atoms/Grid/v2";

const Playground = () => {
    return (
        <div>
            <Head>
                <title>Minsky | Lab</title>
            </Head>
            <div>
                <Text type={TextTypes.title}>Hello World</Text>
                <Text type={TextTypes.subtitle}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                <Text type={TextTypes.body}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                <Text type={TextTypes.simple}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
            </div>
            <div>
                <Title>Hello World</Title>
                <Subtitle>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Subtitle>
                <Body>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Body>
                <Simple>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Simple>
            </div>
            <div>
                <Grid type={["grid", "flex"]} columnsTemplate={{ parts: 3, size: "1fr" }}>
                    Hello
                </Grid>
            </div>
        </div>
    );
};

export default Playground;
