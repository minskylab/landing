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
import { SocialNetwork } from "../components/organisms/MinskySplash/LittleNetwork";

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

const minskySocialNetworks: SocialNetwork[] = [
    { kind: "linkedin", link: "https://www.linkedin.com/company/minskylab" },
    { kind: "github", link: "https://github.com/minskylab" },
    { kind: "twitter", link: "https://twitter.com/MinskyLab" }
];

const menuItems: VerticalMenuItem[] = [
    { key: "home", name: "Home" },
    { key: "services", name: "Our Services" },
    { key: "team", name: "Our Team" },
    { key: "technologies", name: "Our Technologies" },
    { key: "values", name: "Our Values" },
    { key: "specialties", name: "Our Specials" },
    { key: "contact", name: "Contact Us" }
];

const IndexPage: FC = () => {
    const [renderPhysics, setRenderPhysics] = useState<boolean>(false);
    // const [topBarShow, setTopBarShow] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>("home");
    const [unfoldedMenu, setUnfoldedMenu] = useState<boolean>(false);

    useEffect(() => {
        if (window.innerWidth > 970) {
            setRenderPhysics(true);
        }
    }, []);

    useEffect(() => {
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
                items={menuItems}
                unfolded={unfoldedMenu}
            />
            <MinskySplash socialNetworks={minskySocialNetworks} />
            <HomeSectionContainer>
                <MinskyBuild />
            </HomeSectionContainer>
            <Element name="services">
                <HomeSectionContainer>
                    <Services /> {/* OK */}
                </HomeSectionContainer>
            </Element>
            <Element name="specialties">
                <HomeSectionContainer>
                    <Specials /> {/* OK */}
                </HomeSectionContainer>
            </Element>
            <Element name="technologies">
                <HomeSectionContainer>
                    <Technologies /> {/* OK */}
                </HomeSectionContainer>
            </Element>
            <Element name="values">
                <HomeSectionContainer>
                    <GiveYou /> {/* OK */}
                </HomeSectionContainer>
            </Element>
            <Element name="team">
                <HomeSectionContainer>
                    <Team /> {/* OK */}
                </HomeSectionContainer>
            </Element>
            <Element name="contact">
                <HomeSectionContainer>
                    <MinskyContact /> {/* ~OK */}
                </HomeSectionContainer>
            </Element>
            <Footer />
        </div>
    );
};

export default IndexPage;
