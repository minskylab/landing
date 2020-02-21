import React from "react";
import { Text } from "../../components/atoms/Text";
import Title from "../../components/atoms/Text/Title";
import { TextTypes } from "../../components/atoms/Text/constants";
import Head from "next/head";

const Playground = () => {
    return (
        <div>
            <Head>
                <title>Minsky | Lab</title>
            </Head>
            <div>
                <Text type={TextTypes.title}>Hello World</Text>
                <Title>Hello World</Title>
                <Text type={TextTypes.subtitle}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                <Text type={TextTypes.body}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                <Text type={TextTypes.simple}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
            </div>
        </div>
    );
};

export default Playground;
