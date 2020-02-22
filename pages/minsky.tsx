import React, { FC } from "react";
import Head from "next/head";
// import { styled } from "linaria/react";
import Grid from "../components/atoms/Grid";
// import { Scene } from "../components/atoms/Scene";
import { BulbLights } from "../components/atoms/Scene/BulbLigths";

const IndexPage: FC = () => {
    return (
        <div>
            <Head>
                <title>Minsky | Lab</title>
            </Head>

            <Grid flex>
                <BulbLights></BulbLights>
            </Grid>
        </div>
    );
};

export default IndexPage;
