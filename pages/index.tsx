import React, { FunctionComponent, useState } from "react";
import { styled } from "linaria/react";
import Head from "next/head";
import Title from "../components/atoms/Text/Title";
import { Grid } from "../components/atoms/Grid/v2";
import { MinskyLogo } from "../components/atoms/Icon/icons";
import { Button } from "../components/atoms/Button";
import VerticalMenu from "../components/atoms/VerticalMenu";
import { Simple } from "../components/atoms/Text/Simple";
import Body from "../components/atoms/Text/Body";
import { BulbLights } from "../components/atoms/Scene/BulbLigths";

const Background = styled.div`
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
`;

const items = [
    { key: "home", name: "Home" },
    { key: "services", name: "Our Services" },
    { key: "team", name: "Our Team" },
    { key: "technologies", name: "Our Technologies" }
];

const IndexPage: FunctionComponent = () => {
    const [currentPage, setCurrentPage] = useState<string>("home");

    return (
        <div>
            <Head>
                <title>Minsky | Home</title>
            </Head>
            <Background>
                <BulbLights></BulbLights>
            </Background>
            <Grid
                type={"grid"}
                columnsTemplate={{ raw: "repeat(3, 1fr)" }}
                rowsTemplate={{ raw: "repeat(6, auto)" }}
                // alignItems={"center"}
                justifyContent={"center"}
                m={{ x: "1.4em", y: "2.4em" }}
            >
                <Grid cols={{ raw: "1 / span 1" }}>
                    <VerticalMenu items={items} selectedItem={currentPage}></VerticalMenu>
                </Grid>
                <Grid type={"flex"} cols={{ raw: "2 / span 1" }} justifyContent={"center"}>
                    <MinskyLogo />
                </Grid>
                <Grid type={"flex"} cols={{ raw: "3 / span 1" }} justifyContent={"flex-end"}>
                    <Button primary>Contact Us</Button>
                </Grid>
                <Grid rows={{ raw: "2 / span 1" }} cols={{ raw: "2 / span 1" }}>
                    <Grid m={{ all: "10em 2em 0 2em" }}>
                        <Title alignText={"center"}> MINSKY </Title>
                        <Body alignText={"right"}>A new technological perspective for your ideas</Body>
                        <Grid
                            type={"grid"}
                            justifyItems={"center"}
                            cols={{ raw: "repeat(3, 1fr)" }}
                            gridAutoFlow={"row"}
                            m={{ x: "1.8em", y: "4em" }}
                        >
                            {["Linkedin", "Github", "Twitter"].map((socialNet, i) => (
                                <div key={i}>
                                    <div
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                            margin: "auto",
                                            backgroundColor: "#1a1d25"
                                        }}
                                    />
                                    <Simple alignText={"center"}>{socialNet}</Simple>
                                </div>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid rows={{ raw: "3 / span 1" }} cols={{ raw: "2 / span 1" }} m={{ top: "10em" }}>
                    <Grid type={"flex"} justifyContent={"center"}>
                        <Grid>
                            <Simple>Learn more</Simple>
                            <div
                                style={{
                                    height: "8em",
                                    width: "0.1em",
                                    maxWidth: "0.1em",
                                    backgroundColor: "#1a1d25",
                                    marginLeft: "2.44em"
                                }}
                            ></div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default IndexPage;
