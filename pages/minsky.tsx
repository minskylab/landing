import React, { FC } from "react";
import Head from "next/head";
import { styled } from "linaria/react";
import Grid from "../components/atoms/Grid";

const IndexPage: FC = () => {
    return (
        <div>
            <Head>
                <title>Minsky | Lab</title>
            </Head>

            <Grid container gap={"1em"}>
                <Grid>A</Grid>
                <Grid>B</Grid>
                <Grid container columnsTemplate={"repeat(3, auto)"} rowsTemplate={"repeat(3, auto)"}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                        <Grid>{`${i}`}</Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    );
};

export default IndexPage;
