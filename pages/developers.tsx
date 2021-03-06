import React, { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import MinskyDevsTopBar from "../components/organisms/MinskyDevsTopBar";
import Grid from "../components/atoms/Grid/v2";
import { Body, Title, Simple } from "../components/atoms/Text/v2";
import DevRegisterForm, { Partner } from "../components/organisms/DevsRegisterForm";
import { Footer } from "../components/organisms/MinskyFooter";
import KintoClient from "kinto-http";
import Modal from "../components/atoms/Modal";
import ModalCard from "../components/atoms/Modal/Card";
import NextI18NextInstance from "../general/i18n";
import { Button } from "../components/atoms/Button";
import { VerticalMenuItem } from "../components/atoms/VerticalMenu";
import { useRouter } from "next/router";

const client = new KintoClient("https://kinto.minsky.cc/v1");

const DevelopersPage: NextPage = () => {
    const [modal, setModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [unfoldedMenu, setUnfoldedMenu] = useState<boolean>(false);
    const [t, i18n] = NextI18NextInstance.useTranslation("developer");

    const router = useRouter();

    const submitNewPartner = async (newPartner: Partner) => {
        setLoading(true);
        const result = await client
            .bucket("Minsky")
            .collection("partners")
            .createRecord(newPartner);
        // console.log(result);
        setLoading(false);
        setModal(true);
    };

    return (
        <>
            <Head>
                <title> Minsky | Developers</title>
                <meta name="theme-color" content="#1b1b1b" />
            </Head>
            <MinskyDevsTopBar
                unfolded={unfoldedMenu}
                onSelected={(selected: VerticalMenuItem) => {
                    // console.log(selected);
                    if (selected.key === "home") {
                        // to home
                        setUnfoldedMenu(false);
                        router.push("/");
                    }
                }}
            />
            <Grid p={[{ x: "2rem" }, { x: "15vw" }]} m={{ top: "6rem" }}>
                <div>
                    <Title size={"3rem"} bold>
                        {t("greetings")}
                    </Title>
                </div>
                <div style={{ marginTop: "1.5rem" }}>
                    <Body size={"1.3rem"}>{t("body")}</Body>
                </div>
                <div style={{ marginTop: "1.5rem" }}>
                    <Simple size={"1rem"}>{t("interested")}</Simple>
                </div>
                <div style={{ marginTop: "1.5rem" }}>
                    <DevRegisterForm onSubmit={submitNewPartner} disable={loading} />
                </div>
            </Grid>
            <Modal active={modal}>
                <ModalCard
                    title={t("done_message")}
                    closable
                    onAction={act => {
                        if (act === "close") {
                            setModal(false);
                        }
                    }}
                    customActions={
                        <Grid>
                            <Button primary onClick={() => setModal(false)}>
                                Ok
                            </Button>
                        </Grid>
                    }
                >
                    <Grid>
                        <Grid>
                            <Body> {t("partner_register_done")}</Body>
                        </Grid>
                    </Grid>
                </ModalCard>
            </Modal>
            <Footer />
        </>
    );
};

export default DevelopersPage;
