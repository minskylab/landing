import React, { FunctionComponent } from "react";
import Head from "next/head";
import { Grid } from "../components/atoms/Grid/v2";

const IndexPage: FunctionComponent = () => {
    return (
        <div>
            <Head>
                <title>Minsky | Chatbots</title>
            </Head>
            <div>
                <h1>Grid Example</h1>
                <div>
                    <Grid
                        type={"grid"}
                        colsTemplate={{ parts: 2, size: "1fr" }}
                        rowsTemplate={{ parts: 3, size: "1fr" }}
                    >
                        <Grid
                            type={"flex"}
                            cols={{ from: 1, how: 1 }}
                            rows={{ from: 1, how: 1 }}
                            justifyContent={"center"}
                        >
                            A
                        </Grid>
                        <Grid
                            type={"flex"}
                            cols={{ raw: "2 / span 1" }}
                            rows={{ from: 2, how: 1 }}
                            justifyContent={"center"}
                        >
                            B
                        </Grid>
                        <Grid
                            type={"flex"}
                            cols={{ from: 1, how: 1 }}
                            rows={{ from: 2, how: 1 }}
                            justifyContent={"center"}
                        >
                            C
                        </Grid>
                        <Grid
                            type={"flex"}
                            cols={{ from: 1, how: 1 }}
                            rows={{ from: 3, how: 1 }}
                            justifyContent={"center"}
                        >
                            D
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default IndexPage;
