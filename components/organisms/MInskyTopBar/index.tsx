import React, { FC, useState, useEffect } from "react";
import { styled } from "linaria/react";
import { Grid } from "../../atoms/Grid/v2";
import { MenuIcon, MinskyLogoIcon } from "../../atoms/Icon/icons";
import { Button } from "../../atoms/Button";
import VerticalMenu from "../../atoms/VerticalMenu";
import ButtonIcon from "../../atoms/Button/ButtonIcon";
import MinskyMenu from "../../molecules/MinskyMenu";
import { useSpring, animated } from "react-spring";
import { css } from "linaria";
import OpenMenuIcon from "../../molecules/OpenMenuIcon";

const menuContainer = css`
    width: 100%;
    position: fixed;
    z-index: 10;
    top: 0;
`;
interface MinskyTopBarContainerProps {
    showing?: boolean;
}

const MinskyTopBarContainer = styled.div<MinskyTopBarContainerProps>`
    z-index: 10;
    position: ${props => (props.showing ? "fixed" : "fixed")};
    top: ${props => (props.showing ? "0em" : "-4em")};
    opacity: ${props => (props.showing ? "100%" : "0")};
    left: 0;
    width: 100%;
    background-color: #fffcf0;
    transition: 0.1s;
`;

const topBarContainer = css`
    z-index: 11;
    position: fixed;
    top: 0;
    opacity: 100%;
    left: 0;
    width: 100%;
    background-color: #fffcf0;
    /* height: 4rem; */
`;

const DEBUG_MODE = false;
interface MinskyTopBarProps {
    active: boolean;
    children?: any;
}

const MinskyTopBar: FC<MinskyTopBarProps> = (props: MinskyTopBarProps) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [propsMenu, setPropsMenu] = useSpring(() => ({ transform: "translateY(-30rem)" }));
    const [propsBar, setPropsBar] = useSpring(() => ({ backgroundColor: "#fffcf0" }));
    const [propsVerticalMenu, setPropsVerticalMenu] = useSpring(() => ({
        opacity: 1,
        config: {
            tension: 300
        }
    }));

    useEffect(() => {
        setPropsMenu({ transform: openMenu ? "translateY(0)" : "translateY(-30rem)" });
        setPropsBar({ backgroundColor: openMenu ? "#ffdf53" : "#fffcf0" });
        setPropsVerticalMenu({ opacity: openMenu ? 0 : 1 });
    }, [openMenu]);

    return (
        <>
            <animated.div className={menuContainer} style={propsMenu}>
                <MinskyMenu cleanMode={false} onClose={() => setOpenMenu(false)} />
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
                        <animated.div style={propsVerticalMenu}>
                            <Grid m={{ left: "2em" }}>
                                <VerticalMenu
                                    selectedItem={"home"}
                                    items={[{ key: "home", name: "Home" }]}
                                    compact
                                ></VerticalMenu>
                            </Grid>
                        </animated.div>
                    </Grid>
                    <Grid debug={DEBUG_MODE} alignItems={"center"} type={"flex"} justifyContent={"center"}>
                        <MinskyLogoIcon />
                    </Grid>
                    <animated.div style={propsVerticalMenu}>
                        <Grid debug={DEBUG_MODE} type={["none", "none", "flex"]} justifyContent={"flex-end"}>
                            <Grid debug={DEBUG_MODE} m={{ right: "1.2rem" }}>
                                <Button minsky>Developers Here</Button>
                            </Grid>
                            <Grid debug={DEBUG_MODE}>
                                <Button primary>Contact Us</Button>
                            </Grid>
                        </Grid>
                    </animated.div>
                </Grid>
            </animated.div>
        </>
    );
};

export default MinskyTopBar;
