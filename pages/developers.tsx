import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import MinskyDevsTopBar from "../components/organisms/MinskyDevsTopBar";
import Grid from "../components/atoms/Grid/v2";
import { Body, Title, Simple } from "../components/atoms/Text/v2";
import DevRegisterForm from "../components/organisms/DevsRegisterForm";
import { Footer } from "../components/organisms/MinskyFooter";

const DevelopersPage: NextPage = () => {
    return (
        <>
            <Head>
                <title> Minsky | Developers</title>
                <meta name="theme-color" content="#1b1b1b" />
            </Head>
            <MinskyDevsTopBar />
            <Grid p={[{ x: "2rem" }, { x: "15vw" }]} m={{ top: "6rem" }}>
                <div>
                    <Title size={"3rem"} bold>
                        Hi Developers
                    </Title>
                </div>
                <div style={{ marginTop: "1.5rem" }}>
                    <Body size={"1.3rem"}>
                        At Minsky, we heavily think that we need to work with the community and promote open knowledge
                        for its. We think that way have a powerful tool to change and route our nation to a
                        technology-based future. We want to know more developers (and not) interested in use and enhance
                        this model {"-"}based on open source and community driven{"-"} following the only goal to change
                        the technology reality of Peru.
                    </Body>
                </div>
                <div style={{ marginTop: "1.5rem" }}>
                    <Simple size={"1rem"}>
                        If you’re interested in work side by side with us, please fill the following form, we are very
                        excited to meet you.
                    </Simple>
                </div>
                <div style={{ marginTop: "1.5rem" }}>
                    <DevRegisterForm />
                </div>
            </Grid>
            <Footer />
        </>
    );
};

export default DevelopersPage;
