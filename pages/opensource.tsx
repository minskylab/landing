import React, { FunctionComponent } from "react";
import Head from "next/head";
import MinskyMenu from "../components/organisms/MinskyMenu";

const IndexPage: FunctionComponent = () => {
    return (
        <div>
            <Head>
                <title>Minsky | Open Source</title>
            </Head>
            <div>
                <MinskyMenu></MinskyMenu>
            </div>
        </div>
    );
};

export default IndexPage;
