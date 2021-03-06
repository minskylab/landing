import React, { FC, useState, useEffect } from "react";
import { Grid } from "../../atoms/Grid/v2";
import { MinskyLogoIcon } from "../../atoms/Icon/icons";
import { VerticalMenuItem } from "../../atoms/VerticalMenu";

import MinskyMenu from "../../molecules/MinskyMenu";
import { useSpring, animated } from "react-spring";
import { css } from "linaria";
import OpenMenuIcon from "../../molecules/OpenMenuIcon";
import NextI18NextInstance from "../../../general/i18n";
import LanguageSelector from "../../molecules/LanguageSelector";

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
    background-color: #fffcf0;
    /* #fffcf0; */
    /* height: 4rem; */
`;

interface MinskyDevTopBarProps {
    children?: any;
    logoColor?: string;
    color?: string;
    onSelected?(item: VerticalMenuItem): void;
    unfolded?: boolean;
    onClick?(): void;
}

const MinskyDevTopBar: FC<MinskyDevTopBarProps> = (props: MinskyDevTopBarProps) => {
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

    let menuItems: VerticalMenuItem[] = [{ key: "home", name: "To Home" }]; // TODO: To translate

    useEffect(() => {
        setPropsMenu({ transform: openMenu ? "translateY(0)" : "translateY(-30rem)" });
        setPropsBar({ backgroundColor: openMenu ? "#ffdf53" : "#fffcf0" });
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
                    onSelected={(item: VerticalMenuItem) => props.onSelected && props.onSelected(item)}
                    items={menuItems}
                    selectedItem={"home"}
                />
            </animated.div>

            <animated.div className={topBarContainer} style={propsBar}>
                <Grid
                    type={"grid"}
                    colsTemplate={{ parts: 3, size: "1fr" }}
                    m={{ x: "0.8em", y: "0.8em" }}
                    alignItems={"center"}
                >
                    <Grid type={"flex"} alignItems={"center"}>
                        <OpenMenuIcon
                            initial={"menu"}
                            state={openMenu ? "arrow" : "menu"}
                            onClick={() => setOpenMenu(!openMenu)}
                        />
                    </Grid>
                    <Grid alignItems={"center"} type={"flex"} justifyContent={"center"}>
                        <MinskyLogoIcon color={props.logoColor} />
                    </Grid>

                    <animated.div style={propsVerticalMenu}>
                        <Grid type={["none", "none", "flex"]} justifyContent={"flex-end"}>
                            <Grid type={["none", "none", "block"]} m={{ right: "9rem", top: "-1rem" }}>
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
                        </Grid>
                        <animated.div style={propsVerticalMenu}>
                            <Grid
                                type={["flex", "flex", "none"]}
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

export default MinskyDevTopBar;
