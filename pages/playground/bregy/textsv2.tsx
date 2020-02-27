import React, { FC } from "react";
import Head from "next/head";
import Grid from "../../../components/atoms/Grid/v2";
import { Text } from "../../../components/atoms/Text/v2";
// import { styled } from "linaria/react";

// import { Scene } from "../components/atoms/Scene";

const IndexPage: FC = () => {
    return (
        <div>
            <Head>
                <title>Minsky | Lab</title>
            </Head>

            <Grid p={{ all: "2rem" }}>
                <Text as="h1" fontFamily="Rubik" m={{ all: "1rem" }}>
                    Hello World
                </Text>
                <Text bold>Hello World</Text>
            </Grid>
        </div>
    );
};

export default IndexPage;
