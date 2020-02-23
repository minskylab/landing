import React, { FC } from "react";
import Head from "next/head";
// import { styled } from "linaria/react";
import Grid from "../components/atoms/Grid";
// import { Scene } from "../components/atoms/Scene";
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
