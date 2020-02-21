import React, { FunctionComponent } from "react";
import { styled } from "linaria/react";
import Head from "next/head";
import Title from "../components/atoms/Text/Title";
import Grid from "../components/atoms/Grid";

const IndexPage: FunctionComponent = () => {
    return (
        <div>
            <Head>
                <title>Minsky | Home</title>
            </Head>
            <Grid container columnsTemplate={"repeat(3, 1fr)"} alignItems={"center"}>
                <Grid gridColumn={"2 / span 1"}>
                    <Title alignText={"center"}> Hello Minsky</Title>
                </Grid>
            </Grid>
        </div>
    );
};

export default IndexPage;
