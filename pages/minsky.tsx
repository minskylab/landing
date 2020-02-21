import React, { FunctionComponent } from "react";
import Head from "next/head";
import { Text } from "../components/atoms/Text";
import { TextTypes } from "../components/atoms/Text/constants";

const IndexPage: FunctionComponent = () => {
    return (
        <div>
            <Head>
                <title>Minsky | Lab</title>
            </Head>
            <div>
                <Text type={TextTypes.title}></Text>
            </div>
        </div>
    );
};

export default IndexPage;
