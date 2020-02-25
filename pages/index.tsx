import React, { FunctionComponent, useState, useEffect, useRef, useLayoutEffect } from "react";
import { styled } from "linaria/react";
import Head from "next/head";
import Title from "../components/atoms/Text/Title";
import { Grid } from "../components/atoms/Grid/v2";
import { MinskyLogoIcon, MenuIcon } from "../components/atoms/Icon/icons";
import { Button } from "../components/atoms/Button";
import VerticalMenu from "../components/atoms/VerticalMenu";
import { Simple } from "../components/atoms/Text/Simple";
import Body from "../components/atoms/Text/Body";
import { LightBulbs } from "../components/atoms/Scene/LightBulbs";
import MinskyTopBar from "../components/organisms/MInskyTopBar";
import { Services } from "../components/organisms/MinskyService/index";
import { Technologys } from "../components/organisms/MinskyTechnology/index";
import { Team } from "../components/organisms/MinskyTeam/index";

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

const DEBUG_MODE = false;

const IndexPage: FunctionComponent = () => {
    const [currentPage, setCurrentPage] = useState<string>("home");
    const [renderPhysics, setRenderPhysics] = useState<boolean>(false);
    const [topBarShow, setTopBarShow] = useState<boolean>(false);

    useEffect(() => {
        if (window.innerWidth > 970) {
            setRenderPhysics(true);
        }
    }, []);

    return (
        <div>
            <Head>
                <title>Minsky | Home</title>
                <meta name="theme-color" content="#ffdf53" />
            </Head>
            {renderPhysics && (
                <Background>
                    <LightBulbs></LightBulbs>
                </Background>
            )}
            <MinskyTopBar active={true} />
            <Grid
                debug={DEBUG_MODE}
                type={["block", "block", "grid"]}
                colsTemplate={{ raw: "repeat(3, 1fr)" }}
                rowsTemplate={{ raw: "repeat(6, auto)" }}
                m={{ x: "2.4em", y: "2.4em" }}
            >
                <Grid debug={DEBUG_MODE} rows={{ from: 2, how: 1 }} cols={{ from: 2, how: 1 }}>
                    <Grid
                        debug={DEBUG_MODE}
                        m={[{ all: "25vh 0.5em 0 0.5em" }, { all: "34vh 4.2em 0 4.2em" }, { all: "34vh 2em 0 2em" }]}
                    >
                        <Title alignText={"center"}> MINSKY </Title>
                        <Body alignText={"center"}>A new technological perspective for your ideas</Body>
                        <Grid
                            debug={DEBUG_MODE}
                            type={"grid"}
                            justifyItems={"center"}
                            colsTemplate={{ raw: "repeat(3, 1fr)" }}
                            gridAutoFlow={"row"}
                            m={[
                                { x: "0.4em", y: "1.8em" },
                                { x: "1.8em", y: "1.8em" }
                            ]}
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
                        <Grid debug={DEBUG_MODE} type={["flex", "none"]} justifyContent={"center"}>
                            <Button primary>Contact Us</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    debug={DEBUG_MODE}
                    rows={{ from: 3, how: 1 }}
                    cols={{ from: 2, how: 1 }}
                    m={[{ top: "14vh" }, { top: "20vh" }]}
                >
                    <Grid debug={DEBUG_MODE} type={"flex"} justifyContent={"center"}>
                        <Grid debug={DEBUG_MODE}>
                            <Simple>Learn more</Simple>
                            <div
                                style={{
                                    height: "12em",
                                    width: "0.1em",
                                    maxWidth: "0.1em",
                                    backgroundColor: "#1a1d25",
                                    margin: "auto"
                                }}
                            ></div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid type="block" debug={DEBUG_MODE} p={[{ x: "1.5rem", y: "4rem" },{ x: "3rem", y: "4rem" },{ x: "5rem", y: "4rem" }]}>
                <Services></Services>
            </Grid>
            <Grid type="block" debug={DEBUG_MODE} p={[{ x: "1.5rem", y: "4rem" },{ x: "3rem", y: "4rem" },{ x: "5rem", y: "4rem" }]}>
                <Technologys></Technologys>
            </Grid>
            <Grid type="block" debug={DEBUG_MODE} p={[{ x: "1.5rem", y: "4rem" },{ x: "3rem", y: "4rem" },{ x: "5rem", y: "4rem" }]}>
                <Team></Team>
            </Grid>
                    
        </div>
    );
};

export default IndexPage;
