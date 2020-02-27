import React from "react";
import Head from "next/head";
import Grid from "../../../components/atoms/Grid/v2";
import Title from "../../../components/atoms/Text/Title";
import { styled } from "linaria/react";
import Subtitle from "../../../components/atoms/Text/Subtitle";
import Body from "../../../components/atoms/Text/Body";
import { Simple } from "../../../components/atoms/Text/Simple";
import Important from "../../../components/atoms/Text/Important";

const BulbImage = styled.div`
    background-image: url("/images/uplightbulb.png");
    width: 20rem;
    height: 30rem;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
`;

const ContactPlaygroundPage = () => {
    return (
        <div>
            <Head>
                <title>Minsky | Lab - Contact</title>
            </Head>
            <Grid p={{ all: "4rem" }}>
                <Title> Contact Card Example</Title>
                <Grid>
                    <Grid
                        type={"grid"}
                        rowsTemplate={{ parts: 3, size: "auto" }}
                        colsTemplate={{ parts: 2, size: "auto" }}
                        p={{ y: "2rem", x: "4rem" }}
                    >
                        <Grid rows={{ from: 1, how: 1 }} cols={{ from: 1, how: 1 }}>
                            <Title>Contact Us</Title>
                            <Body>We can meet to drink coffee and talk in comfy place.</Body>
                        </Grid>
                        <Grid rows={{ from: 2, how: 1 }} cols={{ from: 1, how: 1 }}>
                            <Subtitle>Email</Subtitle>
                            <Important color={"#424242"}>hello@minsky.cc</Important>
                            <div style={{ width: "100%", height: "1rem" }} /> {/* spacer */}
                            <Subtitle>Phone | Telegram | WhatsApp</Subtitle>
                            <Important color={"#424242"}>+51 961 818 237</Important>
                        </Grid>
                        <Grid rows={{ from: 3, how: 1 }} cols={{ from: 1, how: 1 }}></Grid>
                        <Grid rows={{ from: 1, how: 3 }} cols={{ from: 2, how: 1 }}>
                            <BulbImage />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default ContactPlaygroundPage;
