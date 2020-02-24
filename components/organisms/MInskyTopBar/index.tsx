import React, { FC } from "react";
import { styled } from "linaria/react";
import { Grid } from "../../atoms/Grid/v2";
import { MenuIcon, MinskyLogoIcon } from "../../atoms/Icon/icons";
import { Button } from "../../atoms/Button";
import VerticalMenu from "../../atoms/VerticalMenu";

interface MinskyTopBarContainerProps {
    showing?: boolean;
}

const MinskyTopBarContainer = styled.div<MinskyTopBarContainerProps>`
    position: ${props => (props.showing ? "fixed" : "fixed")};
    top: ${props => (props.showing ? "0em" : "-4em")};
    opacity: ${props => (props.showing ? "100%" : "0")};
    left: 0;
    width: 100%;
    /* height: 4em; */
    background-color: #fffcf0;
    transition: 0.1s;
`;

const DEBUG_MODE = false;
interface MinskyTopBarProps {
    active: boolean;
    children?: any;
}

const MinskyTopBar: FC<MinskyTopBarProps> = (props: MinskyTopBarProps) => {
    return (
        <MinskyTopBarContainer showing={props.active}>
            <Grid
                debug={DEBUG_MODE}
                type={"grid"}
                colsTemplate={{ parts: 3, size: "1fr" }}
                m={{ x: "1.2em", y: "0.8em" }}
                alignItems={"center"}
            >
                <Grid type={"flex"} debug={DEBUG_MODE} alignItems={"center"}>
                    <MenuIcon />
                    <Grid m={{ left: "2em" }}>
                        <VerticalMenu
                            selectedItem={"home"}
                            items={[{ key: "home", name: "Home" }]}
                            compact
                        ></VerticalMenu>
                    </Grid>
                </Grid>
                <Grid debug={DEBUG_MODE} alignItems={"start"} type={"flex"} justifyContent={"center"}>
                    <MinskyLogoIcon />
                </Grid>
                <Grid debug={DEBUG_MODE} type={["none", "none", "flex"]} justifyContent={"flex-end"}>
                    <Grid debug={DEBUG_MODE} m={{ right: "1.2rem" }}>
                        <Button minsky>Developers Here</Button>
                    </Grid>
                    <Grid debug={DEBUG_MODE}>
                        <Button primary>Contact Us</Button>
                    </Grid>
                </Grid>
            </Grid>
        </MinskyTopBarContainer>
    );
};

export default MinskyTopBar;
