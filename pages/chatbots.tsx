import React, { FunctionComponent } from "react";
import Head from "next/head";
import { Grid } from "../components/atoms/Grid/v2";

const IndexPage: FunctionComponent = () => {
    return (
        <div>
            <Head>
                <title>Minsky | Chatbots</title>
            </Head>
            <div>
                <h1>Grid Example</h1>
                <div></div>
            </div>
        </div>
    );
};

export default IndexPage;
