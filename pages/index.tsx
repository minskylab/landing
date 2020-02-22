import React, { FunctionComponent, useState } from "react";
import { styled } from "linaria/react";
import Head from "next/head";
import Title from "../components/atoms/Text/Title";
import Grid from "../components/atoms/Grid";
import { MinskyLogo } from "../components/atoms/Icon/icons";
import { Button } from "../components/atoms/Button";
import VerticalMenu from "../components/atoms/VerticalMenu";
import { Simple } from "../components/atoms/Text/Simple";
import Body from "../components/atoms/Text/Body";
import { BulbLights } from "../components/atoms/Scene/BulbLigths";
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
            <div style={{ zIndex: -1, position: "absolute", top: 0, left: 0 }}>
                <BulbLights></BulbLights>
            </div>
            <Grid
                container
                columnsTemplate={"repeat(3, 1fr)"}
                rowsTemplate={"repeat(6, auto)"}
                alignItems={"start"}
                mx={"1.4em"}
                my={"2.4em"}
            >
                <Grid gridColumn={"1 / span 1"}>
                    <VerticalMenu items={items} selectedItem={currentPage}></VerticalMenu>
                </Grid>
                <Grid gridColumn={"2 / span 1"} justifyContent={"center"} flex>
                    <MinskyLogo />
                </Grid>
                <Grid gridColumn={"3 / span 1"} justifyContent={"flex-end"} flex>
                    <Button primary>Contact Us</Button>
                </Grid>
                <Grid gridRow={"2 / span 1"} gridColumn={"2 / span 1"}>
                    <Grid m={"10em 2em 0 2em"}>
                        <Title alignText={"center"}> MINSKY </Title>
                        <Body alignText={"right"}>A new technological perspective for your ideas</Body>
                        <Grid
                            container
                            justifyItems={"center"}
                            columnsTemplate={"repeat(3, 1fr)"}
                            gridAutoFlow={"row"}
                            mx={"1.8em"}
                            my={"4em"}
                        >
                            {["Linkedin", "Github", "Twitter"].map(socialNet => (
                                <div>
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
            </Grid>
        </div>
    );
};

export default IndexPage;
