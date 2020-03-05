import React, { FC } from "react";
import Head from "next/head";
import Grid from "../components/atoms/Grid";
import { LightBulbs } from "../components/atoms/Scene/LightBulbs";

const IndexPage: FC = () => {
    return (
        <div>
            <Head>
                <title>Minsky | Lab</title>
            </Head>

            <Grid flex>
                <LightBulbs></LightBulbs>
            </Grid>
        </div>
    );
};

export default IndexPage;
