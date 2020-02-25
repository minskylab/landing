import React from "react";
import { styled } from "linaria/react";
import { Grid } from "../../atoms/Grid/v2";
import { MinskyLogoIcon, MenuIcon } from "../../atoms/Icon/icons";
import VerticalMenu from "../../atoms/VerticalMenu";
import { Button } from "../../atoms/Button";

const Wrapper = styled.div`
    width: 100%;
    background-color: #ffdf53;
    border-radius: 0 0 1.4em 1.4em;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const items = [
    { key: "home", name: "Home" },
    { key: "services", name: "Our Services" },
    { key: "team", name: "Our Team" },
    { key: "technologies", name: "Our Technologies" }
];

const MinskyMenu = () => {
    return (
        <Wrapper>
            <Grid
                type={"grid"}
                colsTemplate={{ parts: 3, size: "auto" }}
                rowsTemplate={{ parts: 3, size: "auto" }}
                p={[
                    { x: "1em", y: "1em" },
                    { x: "1.4em", y: "1.4em" },
                    { x: "1.6em", y: "1.6em" }
                ]}
            >
                <Grid
                    type={"grid"}
                    colsTemplate={{ parts: 3, size: "1fr" }}
                    cols={{ from: 1, how: 3 }}
                    rows={{ from: 1, how: 1 }}
                    alignItems={"start"}
                    m={{ bottom: "1em", top: "0.4em" }}
                >
                    <Grid type={"flex"} cols={{ from: 1, how: 1 }} justifyContent={"flex-start"} p={{ left: "1em" }}>
                        <MenuIcon />
                    </Grid>
                    <Grid type={"flex"} cols={{ from: 2, how: 1 }} justifyContent={"center"}>
                        <MinskyLogoIcon />
                    </Grid>
                </Grid>
                <Grid type={"flex"} cols={{ from: 1, to: 2 }} rows={{ from: 2, how: 1 }} alignItems={"end"}>
                    <VerticalMenu items={items} selectedItem={"home"} />
                </Grid>
                <Grid
                    type={"grid"}
                    cols={{ from: 3, how: 1 }}
                    rows={{ from: 2, how: 1 }}
                    alignItems={"end"}
                    rowsTemplate={{ parts: 2, size: "1fr" }}
                    p={{ bottom: "0em", top: "2.4em" }}
                    m={{ bottom: "0.5em" }}
                >
                    <Grid type={"flex"} rows={{ from: 2, how: 1 }} justifyContent={"flex-end"}>
                        <Button primary>Contact Us</Button>
                    </Grid>
                    <Grid type={"flex"} rows={{ from: 1, how: 1 }} justifyContent={"flex-end"}>
                        <Button minsky>Developers Here</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Wrapper>
    );
};

export default MinskyMenu;
