import React, { FC } from "react";
import Head from "next/head";
import Grid from "../../../components/atoms/Grid/v2";
import { Text } from "../../../components/atoms/Text/v2";
import { Title } from "../../../components/atoms/Text/v2";
import { Subtitle } from "../../../components/atoms/Text/v2";
import { Subtitle2 } from "../../../components/atoms/Text/v2";
import { SubtitlePT } from "../../../components/atoms/Text/v2";
import { Body } from "../../../components/atoms/Text/v2";
import { Simple } from "../../../components/atoms/Text/v2";
import { Important } from "../../../components/atoms/Text/v2";
import { Tags } from "../../../components/atoms/Text/v2";
import { NextPage } from "next";
// import { styled } from "linaria/react";

// import { Scene } from "../components/atoms/Scene";

const IndexPage: FC<NextPage> = (props: NextPage) => {
    return (
        <div>
            <Head>
                <title>Minsky | Lab</title>
            </Head>

            <Grid p={{ all: "2rem" }}>
                <Text as="h1" fontFamily="Rubik" size={"2rem"} m={{ all: "1rem" }} bold>
                    Text Showcase
                </Text>

                <Grid>
                    <Title>Title</Title>
                    <Subtitle>Subtitle</Subtitle>
                    <Subtitle2>Subtitle2</Subtitle2>
                    <SubtitlePT>SubtitlePT</SubtitlePT>
                    <Body>Body</Body>
                    <Simple>Simple</Simple>
                    <Important>Important</Important>
                    <Tags>Tags</Tags>

                    <Title bold>Title</Title>
                    <Subtitle bold>Subtitle</Subtitle>
                    <Subtitle2 bold>Subtitle2</Subtitle2>
                    <SubtitlePT bold>SubtitlePT</SubtitlePT>
                    <Body bold>Body</Body>
                    <Simple bold>Simple</Simple>
                    <Important bold>Important</Important>
                    <Tags bold>Tags</Tags>

                    <Title color={"#ffdf53F0"}>Title</Title>
                    <Subtitle color={"#ffdf53E0"}>Subtitle</Subtitle>
                    <Subtitle2 color={"#ffdf53D2"}>Subtitle2</Subtitle2>
                    <SubtitlePT color={"#ffdf53C3"}>SubtitlePT</SubtitlePT>
                    <Body color={"#ffdf53A4"}>Body</Body>
                    <Simple color={"#ffdf5395"}>Simple</Simple>
                    <Important color={"#ffdf5386"}>Important</Important>
                    <Tags color={"#ffdf5377"}>Tags</Tags>
                </Grid>
            </Grid>
        </div>
    );
};

export default IndexPage;
