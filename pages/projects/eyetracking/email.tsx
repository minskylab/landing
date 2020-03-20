import React, { FC } from "react";
import { NextPage } from "next";
import Head from "next/head";

const SimulatorPage: FC<NextPage> = (props: NextPage) => {
    return (
        <>
            <Head>
                <title>Eye Tracking Project | Minsky</title>
                <meta
                    name="description"
                    content="Eye Tracking Project was created to help to make a research related to eating disorders"
                />
            </Head>
            <div>Simulator Page</div>
        </>
    );
};

export default SimulatorPage;
