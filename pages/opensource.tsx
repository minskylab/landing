import React, { FunctionComponent } from "react";
import Head from "next/head";
import MinskyMenu from "../components/molecules/MinskyMenu";

const IndexPage: FunctionComponent = () => {
    return (
        <div>
            <Head>
                <title>Minsky | Open Source</title>
                <meta name="theme-color" content="#ffdf53" />
            </Head>
            <div>
                <MinskyMenu></MinskyMenu>
            </div>
        </div>
    );
};

export default IndexPage;
