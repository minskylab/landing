import React, { FC } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Grid from "../../../components/atoms/Grid/v2";
import { Title, Subtitle, Body } from "../../../components/atoms/Text/v2";
import { css } from "linaria";
import Input from "../../../components/atoms/Input";

const baseLayout = css`
    height: 100vh;
`;

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
            <Grid className={baseLayout} type={"grid"} p={{ all: "2rem" }} colsTemplate={{ raw: "1.8fr 1fr" }}>
                <Grid type={"flex"} cols={{ from: 1, how: 1 }}>
                    <Grid p={{ x: "2rem", y: "1rem" }}>
                        <Title bold m={{ bottom: "2rem" }}>
                            Mail Simulator
                        </Title>
                        <Subtitle> From: {"hello@minsky.cc"} </Subtitle>
                        <Subtitle> To: {"carlos.almenara@upc.edu.pe"} </Subtitle>
                        <Subtitle> Subject: {"XXXXXXXXXXX"} </Subtitle>
                        <Grid m={{ top: "2rem" }}>
                            <Body m={{ bottom: "1rem" }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, quaerat amet quidem
                                minus nemo ex ea sit quis voluptate dolorum eaque perferendis aperiam totam minima
                                voluptatibus aliquid autem doloribus recusandae. Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Laudantium magni, ut, vitae, corrupti ipsam quod iure velit tempora
                                voluptate atque nam alias voluptatem dolore. Amet saepe neque quidem consequatur alias.
                            </Body>
                            <Input></Input>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid type={"flex"} cols={{ from: 2, how: 1 }} justifyContent={"center"}>
                    <div style={{ display: "flex", width: "80%", backgroundColor: "#ffdf53" }}>Ad here</div>
                </Grid>
            </Grid>
        </>
    );
};

export default SimulatorPage;
