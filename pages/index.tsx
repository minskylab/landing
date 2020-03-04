import React, { useState, useEffect, useRef, useLayoutEffect, FC, Children } from "react";
import { styled } from "linaria/react";
import Head from "next/head";
import { Grid } from "../components/atoms/Grid/v2";

import { LightBulbs } from "../components/atoms/Scene/LightBulbs";
import MinskyTopBar from "../components/organisms/MInskyTopBar";
import { Services } from "../components/organisms/MinskyServices/index";
import { Technologies } from "../components/organisms/MinskyTechnology";
import { Team } from "../components/organisms/MinskyMainTeam/index";

import { Specials } from "../components/organisms/MinskySpecials";
import { GiveYou } from "../components/organisms/MinskyGive";

import { Footer } from "../components/organisms/MinskyFooter/index";
import MinskyBuild from "../components/organisms/MinskyBuild";
import MinskyContact from "../components/organisms/MinskyContact/v2";
import { Element, scroller } from "react-scroll";

import { VerticalMenuItem } from "../components/atoms/VerticalMenu";
import MinskySplash from "../components/organisms/MinskySplash";
import NextI18NextInstance from "../general/i18n";

const Background = styled.div`
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
`;

const DEBUG_MODE = false;

interface HomeSectionContainerProps {
    children: any;
}

const HomeSectionContainer: FC<HomeSectionContainerProps> = (props: HomeSectionContainerProps) => {
    return (
        <Grid
            type="block"
            debug={DEBUG_MODE}
            p={[
                { x: "2rem", y: "4rem" },
                { x: "3rem", y: "4rem" },
                { x: "15vh", y: "4rem" }
            ]}
        >
            {props.children}
        </Grid>
    );
};

const IndexPage: FC = () => {
    const [renderPhysics, setRenderPhysics] = useState<boolean>(false);
    // const [topBarShow, setTopBarShow] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>("home");
    const [unfoldedMenu, setUnfoldedMenu] = useState<boolean>(false);

    const [t, i18n] = NextI18NextInstance.useTranslation("topbar");

    const routes: string[] = t("routes")
        .split(",")
        .map(r => r.trim());
    let menuItems: VerticalMenuItem[] = [];
    t("options")
        .split(",")
        .map((opt, i) => {
            opt = opt.trim();
            const r = routes[i].trim();
            menuItems.push({ name: opt, key: r });
        });

    useEffect(() => {
        if (window.innerWidth > 970) {
            setRenderPhysics(true);
        }
    }, []);

    useEffect(() => {
        // console.log(selected);
        setUnfoldedMenu(false);
        scroller.scrollTo(selected, {
            duration: 500,
            smooth: true
        });
    }, [selected]);

    return (
        <div style={{ overflow: "hidden" }}>
            <Head>
                <title>Minsky | Home</title>
                <meta name="theme-color" content="#ffdf53" />
            </Head>
            {renderPhysics && (
                <Background>
                    <LightBulbs />
                </Background>
            )}
            <MinskyTopBar
                active={true}
                onSelected={(item: VerticalMenuItem) => setSelected(item.key)}
                unfolded={unfoldedMenu}
            />
            <MinskySplash onContact={() => setSelected("contact")} />
            <HomeSectionContainer>
                <MinskyBuild />
            </HomeSectionContainer>
            <Element name={routes[1] || "services"}>
                <HomeSectionContainer>
                    <Services /> {/* OK */}
                </HomeSectionContainer>
            </Element>
            <Element name={routes[2] || "specialties"}>
                <HomeSectionContainer>
                    <Specials /> {/* OK */}
                </HomeSectionContainer>
            </Element>
            <Element name={routes[3] || "technologies"}>
                <HomeSectionContainer>
                    <Technologies /> {/* OK */}
                </HomeSectionContainer>
            </Element>
            <Element name={routes[4] || "values"}>
                <HomeSectionContainer>
                    <GiveYou /> {/* OK */}
                </HomeSectionContainer>
            </Element>
            <Element name={routes[5] || "team"}>
                <HomeSectionContainer>
                    <Team /> {/* OK */}
                </HomeSectionContainer>
            </Element>
            <Element name={routes[6] || "contact"}>
                <HomeSectionContainer>
                    <MinskyContact /> {/* ~OK */}
                </HomeSectionContainer>
            </Element>
            <Footer />
        </div>
    );
};

export default IndexPage;
