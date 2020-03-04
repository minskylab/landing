import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import MinskyDevsTopBar from "../components/organisms/MinskyDevsTopBar";
import Grid from "../components/atoms/Grid/v2";
import { Body, Title, Simple } from "../components/atoms/Text/v2";
import DevRegisterForm from "../components/organisms/DevsRegisterForm";
import { Footer } from "../components/organisms/MinskyFooter";
import NextI18NextInstance from "../general/i18n";

const DevelopersPage: NextPage = () => {
    const [t, i18n] = NextI18NextInstance.useTranslation("developer");
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
                        {t("greetings")}
                    </Title>
                </div>
                <div style={{ marginTop: "1.5rem" }}>
                    <Body size={"1.3rem"}>
                       {t("body")}
                    </Body>
                </div>
                <div style={{ marginTop: "1.5rem" }}>
                    <Simple size={"1rem"}>
                        {t("interested")}
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
