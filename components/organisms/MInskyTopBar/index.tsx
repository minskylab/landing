import React, { FC, useState, useEffect } from "react";
import { styled } from "linaria/react";
import { Grid } from "../../atoms/Grid/v2";
import { MinskyLogoIcon } from "../../atoms/Icon/icons";
import { Button } from "../../atoms/Button";
import VerticalMenu, { VerticalMenuItem } from "../../atoms/VerticalMenu";
import Router from 'next/router';
import MinskyMenu from "../../molecules/MinskyMenu";
import { useSpring, animated } from "react-spring";
import { css } from "linaria";
import OpenMenuIcon from "../../molecules/OpenMenuIcon";
import NextI18NextInstance from "../../../general/i18n";
import LanguageSelector from "../../molecules/LanguageSelector";
import { createPublicKey } from "crypto";
import { Title } from "../../atoms/Text/v2";

const menuContainer = css`
    width: 100%;
    position: fixed;
    z-index: 10;
    top: 0;
`;

const topBarContainer = css`
    z-index: 11;
    position: fixed;
    top: 0;
    opacity: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    /* #fffcf0; */
    /* height: 4rem; */
`;

const DEBUG_MODE = false;

interface MinskyTopBarProps {
    active: boolean;
    children?: any;
    logoColor?: string;
    onSelected?(item: VerticalMenuItem): void;
    unfolded?: boolean;

}

const MinskyTopBar: FC<MinskyTopBarProps> = (props: MinskyTopBarProps) => {
    const [openMenu, setOpenMenu] = useState<boolean>(props.unfolded || false);
    const [propsMenu, setPropsMenu] = useSpring(() => ({ transform: "translateY(-30rem)" }));
    const [propsBar, setPropsBar] = useSpring(() => ({ backgroundColor: "white" }));
    const [propsVerticalMenu, setPropsVerticalMenu] = useSpring(() => ({
        opacity: 1,
        config: {
            tension: 300
        }
    }));
    const [t, i18n] = NextI18NextInstance.useTranslation("topbar");


    const routes: string[] = t("routes").split(",");
    let menuItems: VerticalMenuItem[] = [];
    t("options")
        .split(",")
        .map((opt, i) => {
            opt = opt.trim();
            const r = routes[i].trim();
            menuItems.push({ name: opt, key: r });
        });

    useEffect(() => {
        setPropsMenu({ transform: openMenu ? "translateY(0)" : "translateY(-30rem)" });
        setPropsBar({ backgroundColor: openMenu ? "#ffdf53" : "white" });
        setPropsVerticalMenu({ opacity: openMenu ? 0 : 1 });
    }, [openMenu]);


    useEffect(() => {
        setOpenMenu(props.unfolded);
    }, [props]);




    return (
        <>
            <animated.div className={menuContainer} style={propsMenu}>
                <MinskyMenu
                    cleanMode={false}
                    onClose={() => setOpenMenu(false)}
                    onSelected={(item: VerticalMenuItem) => props.onSelected(item)}
                    items={menuItems}
                    selectedItem={"home"}
                    right={
                        <>
                            <Grid type={"flex"} rows={{ from: 1, how: 1 }} justifyContent={"flex-end"}>
                                <Button minsky onClick={() => Router.push('/developers')}>{t("developers_hub_call_action")}</Button>
                            </Grid>
                            <Grid
                                type={"flex"}
                                rows={{ from: 2, how: 1 }}
                                justifyContent={"flex-end"}
                                m={{ top: "1rem" }}
                            >
                                <Button primary>{t("contact_us_call_action")}</Button>
                            </Grid>
                        </>
                    }
                />
            </animated.div>

            <animated.div className={topBarContainer} style={propsBar}>
                <Grid
                    debug={DEBUG_MODE}
                    type={"grid"}
                    colsTemplate={{ parts: 3, size: "1fr" }}
                    m={{ x: "0.8em", y: "0.8em" }}
                    alignItems={"center"}
                >
                    <Grid type={"flex"} debug={DEBUG_MODE} alignItems={"center"}>
                        <OpenMenuIcon
                            initial={"menu"}
                            state={openMenu ? "arrow" : "menu"}
                            onClick={() => setOpenMenu(!openMenu)}
                        />
                        {/* <ButtonIcon icon={MenuIcon} onClick={() => setOpenMenu(!openMenu)} /> */}
                    </Grid>
                    <Grid debug={DEBUG_MODE} alignItems={"center"} type={"flex"} justifyContent={"center"}>
                        <MinskyLogoIcon color={props.logoColor} />
                    </Grid>

                    <animated.div style={propsVerticalMenu}>
                        <Grid debug={DEBUG_MODE} type={["none", "none", "flex"]} justifyContent={"flex-end"}>
                            <Grid type={["none", "none", "block"]} m={{ right: "9rem", top: "0.3rem" }}>
                                <LanguageSelector
                                    languages={[
                                        { little: "en", full: "EN - English" },
                                        { little: "es", full: "ES - Spanish" }
                                    ]}
                                    initialSelected={i18n.language}
                                    onLanguageSelected={lng => {
                                        i18n.changeLanguage(lng.little);
                                    }}
                                />
                            </Grid>
                            <Grid debug={DEBUG_MODE} m={{ right: "1.2rem" }}>
                                <Button minsky onClick={() => Router.push('/developers')}>{t("developers_hub_call_action")}</Button>
                            </Grid>
                            <Grid debug={DEBUG_MODE}>
                                <Button primary>{t("contact_us_call_action")}</Button>
                            </Grid>
                        </Grid>
                        <animated.div style={propsVerticalMenu}>
                            <Grid
                                type={["flex", "none", "none"]}
                                justifyContent={"flex-end"}
                                m={{ right: "1rem", top: "-1rem" }}
                            >
                                <LanguageSelector
                                    languages={[
                                        { little: "en", full: "EN - English" },
                                        { little: "es", full: "ES - Spanish" }
                                    ]}
                                    initialSelected={i18n.language}
                                    onLanguageSelected={lng => {
                                        i18n.changeLanguage(lng.little);
                                    }}
                                />
                            </Grid>
                        </animated.div>
                    </animated.div>
                </Grid>
            </animated.div>
        </>
    );
};

export default MinskyTopBar;
