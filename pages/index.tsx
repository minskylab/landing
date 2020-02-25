import React, { FunctionComponent, useState, useEffect, useRef, useLayoutEffect, useContext } from "react";
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
import { CardServices } from "../components/organisms/MinskyService/index";
import { CardTechnologys } from "../components/organisms/MinskyTechnology/index";

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

    const trigger = useRef(null);

    useLayoutEffect(() => {
        const offset = 28;
        const topPosition = trigger.current.getBoundingClientRect().top + offset;
        const onScroll = () => {
            const scrollPosition = window.scrollY; //+ window.innerHeight;
            if (topPosition < scrollPosition) {
                return setTopBarShow(true);
            }
            return setTopBarShow(false);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
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
            <Grid
                debug={DEBUG_MODE}
                type={["block", "block", "grid"]}
                colsTemplate={{ raw: "repeat(3, 1fr)" }}
                rowsTemplate={{ raw: "repeat(6, auto)" }}
                m={{ x: "2.4em", y: "2.4em" }}
            >
                <Grid debug={DEBUG_MODE} type={["none", "none", "block"]} cols={{ from: 1, how: 1 }}>
                    <VerticalMenu items={items} selectedItem={currentPage} compact={topBarShow}></VerticalMenu>
                </Grid>
                <Grid debug={DEBUG_MODE} type={"block"} cols={{ from: 2, how: 1 }}>
                    <Grid
                        debug={DEBUG_MODE}
                        type={["grid", "none", "none"]}
                        colsTemplate={{ parts: 3, size: "1fr" }}
                        alignItems={"start"}
                    >
                        <Grid cols={{ from: 1, how: 1 }}>
                            <MenuIcon />
                        </Grid>
                        <Grid
                            debug={DEBUG_MODE}
                            type={"flex"}
                            cols={{ from: 2, how: 1 }}
                            alignItems={"start"}
                            justifyContent={"center"}
                        >
                            <MinskyLogoIcon />
                        </Grid>
                    </Grid>
                    <div ref={trigger}></div>
                </Grid>
                <Grid
                    debug={DEBUG_MODE}
                    type={["none", "none", "flex"]}
                    cols={{ raw: "3 / span 1" }}
                    justifyContent={"flex-end"}
                >
                    <Grid debug={DEBUG_MODE} m={{ right: "1.2rem" }}>
                        <Button minsky>Are you a developer?</Button>
                    </Grid>
                    <Grid debug={DEBUG_MODE}>
                        <Button primary>Contact Us</Button>
                    </Grid>
                </Grid>
                <MinskyTopBar active={topBarShow}>
                    <Grid
                        debug={DEBUG_MODE}
                        type={"grid"}
                        colsTemplate={{ parts: 3, size: "1fr" }}
                        m={{ x: "1.4em", y: "2.86em" }}
                    >
                        <Grid debug={DEBUG_MODE} alignItems={"start"}>
                            <MenuIcon />
                        </Grid>
                        <Grid debug={DEBUG_MODE} alignItems={"start"} type={"flex"} justifyContent={"center"}>
                            <MinskyLogoIcon />
                        </Grid>
                        <Grid debug={DEBUG_MODE} type={["none", "none", "flex"]} justifyContent={"flex-end"}>
                            <Grid debug={DEBUG_MODE} m={{ right: "1.2rem" }}>
                                <Button minsky>Are you a developer?</Button>
                            </Grid>
                            <Grid debug={DEBUG_MODE}>
                                <Button primary>Contact Us</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </MinskyTopBar>
                <Grid debug={DEBUG_MODE} rows={{ from: 2, how: 1 }} cols={{ from: 2, how: 1 }}>
                    <Grid
                        debug={DEBUG_MODE}
                        m={[{ all: "25vh 0.5em 0 0.5em" }, { all: "16em 4.2em 0 4.2em" }, { all: "10em 2em 0 2em" }]}
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
                                { x: "1.8em", y: "0.1em" },
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
            <Grid type="block" debug={DEBUG_MODE} p={[{ x: "2rem", y: "4rem" }]}>
                <CardServices></CardServices>
            </Grid>
            <Grid type="block" debug={DEBUG_MODE} p={[{ x: "2rem"}]}>
                <CardTechnologys></CardTechnologys>
            </Grid>
        </div>
    );
};

export default IndexPage;
