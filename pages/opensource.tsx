import React, { FunctionComponent } from "react";
import Head from "next/head";
import { Title, Subtitle } from "../components/atoms/Text/v2";

const IndexPage: FunctionComponent = () => {
    return (
        <div>
            <Head>
                <title>Minsky | Open Source</title>
                <meta name="theme-color" content="#ffdf53" />
            </Head>
            <div>
                <Title>Open Source</Title>
                <Subtitle>The future of the humanity</Subtitle>
            </div>
        </div>
    );
};

export default IndexPage;
