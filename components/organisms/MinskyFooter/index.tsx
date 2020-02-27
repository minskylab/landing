import React from "react";
import Grid from "../../atoms/Grid/v2";

import { MinskyLogoIcon } from "../../atoms/Icon/icons";
import { Title, Body, Simple } from "../../atoms/Text/v2";

import { LinkedIn } from "../../../components/atoms/Icon";
import ColorTypes from "../../../components/atoms/Colors";
import Github from "../../../components/atoms/Icon/Github";
import Twitter from "../../../components/atoms/Icon/Twitter";

export const Footer = () => {
    return (
        <Grid
            rowsTemplate={[
                { parts: 17, size: "auto" },
                { parts: 7, size: "auto" }
            ]}
            type="grid"
            colsTemplate={[
                { parts: 2, size: "auto" },
                { parts: 4, size: "auto" }
            ]}
            justifyContent="center"
            rowGap="1em"
            columnGap="5em"
        >
            <Grid
                rows={[
                    { from: 1, how: 2 },
                    { from: 1, how: 1 }
                ]}
                cols={[
                    { from: 2, how: 1 },
                    { from: 1, how: 1 }
                ]}
                m={[{ bottom: "2em" }, { all: "0px" }]}
                type="flex"
                alignItems={"center"}
            >
                <MinskyLogoIcon />
                <Title textAlign={"center"} bold m={{ left: "0.4rem" }}>
                    MINSKY
                </Title>
            </Grid>
            <Grid
                rows={[
                    { from: 3, how: 1 },
                    { from: 1, how: 1 }
                ]}
                cols={[
                    { from: 1, how: 1 },
                    { from: 2, how: 1 }
                ]}
                type="flex"
            >
                <Body bold>{"About us"}</Body>
            </Grid>
            <Grid
                rows={[
                    { from: 4, how: 1 },
                    { from: 2, how: 1 }
                ]}
                cols={[
                    { from: 1, how: 1 },
                    { from: 2, how: 1 }
                ]}
                type="flex"
            >
                <Simple> {"Home"} </Simple>
            </Grid>
            <Grid
                rows={[
                    { from: 5, how: 1 },
                    { from: 3, how: 1 }
                ]}
                cols={[
                    { from: 1, how: 1 },
                    { from: 2, how: 1 }
                ]}
                type="flex"
            >
                <Simple textDecoration="line-through">{"Our History"}</Simple>
            </Grid>
            <Grid
                rows={[
                    { from: 6, how: 1 },
                    { from: 4, how: 1 }
                ]}
                cols={[
                    { from: 1, how: 1 },
                    { from: 2, how: 1 }
                ]}
                type="flex"
            >
                <Simple textDecoration="line-through">{"Our products"}</Simple>
            </Grid>
            <Grid
                rows={[
                    { from: 7, how: 1 },
                    { from: 5, how: 1 }
                ]}
                cols={[
                    { from: 1, how: 1 },
                    { from: 2, how: 1 }
                ]}
                type="flex"
            >
                <Simple> {"Jobs"} </Simple>
            </Grid>
            <Grid
                rows={[
                    { from: 3, how: 1 },
                    { from: 1, how: 1 }
                ]}
                cols={[
                    { from: 2, how: 1 },
                    { from: 3, how: 1 }
                ]}
                type="flex"
            >
                <Body bold>{"Resourses"}</Body>
            </Grid>
            <Grid
                rows={[
                    { from: 4, how: 1 },
                    { from: 2, how: 1 }
                ]}
                cols={[
                    { from: 2, how: 1 },
                    { from: 3, how: 1 }
                ]}
                type="flex"
            >
                <Simple textDecoration="line-through">{"Faq"}</Simple>
            </Grid>
            <Grid
                rows={[
                    { from: 5, how: 1 },
                    { from: 3, how: 1 }
                ]}
                cols={[
                    { from: 2, how: 1 },
                    { from: 3, how: 1 }
                ]}
                type="flex"
            >
                <Simple textDecoration="line-through">{"Blog"}</Simple>
            </Grid>
            <Grid
                rows={[
                    { from: 6, how: 1 },
                    { from: 4, how: 1 }
                ]}
                cols={[
                    { from: 2, how: 1 },
                    { from: 3, how: 1 }
                ]}
                type="flex"
            >
                <Simple textDecoration="line-through">{"Video tutorials"}</Simple>
            </Grid>
            <Grid
                rows={[
                    { from: 7, how: 1 },
                    { from: 5, how: 1 }
                ]}
                cols={[
                    { from: 2, how: 1 },
                    { from: 3, how: 1 }
                ]}
                type="flex"
            >
                <Simple>{"Developers"}</Simple>
            </Grid>
            <Grid
                rows={[
                    { from: 9, how: 1 },
                    { from: 1, how: 1 }
                ]}
                cols={[
                    { from: 1, how: 2 },
                    { from: 4, how: 1 }
                ]}
                type="flex"
            >
                <Body bold>{"Useful information"}</Body>
            </Grid>
            <Grid
                rows={[
                    { from: 10, how: 1 },
                    { from: 2, how: 1 }
                ]}
                cols={[
                    { from: 1, how: 2 },
                    { from: 4, how: 1 }
                ]}
                type="flex"
            >
                <Simple textDecoration="line-through">{"Terms and conditions"}</Simple>
            </Grid>
            <Grid
                rows={[
                    { from: 11, how: 1 },
                    { from: 3, how: 1 }
                ]}
                cols={[
                    { from: 1, how: 2 },
                    { from: 4, how: 1 }
                ]}
                type="flex"
            >
                <Simple textDecoration="line-through">{"Privacy policy"}</Simple>
            </Grid>
            <Grid
                rows={[
                    { from: 12, how: 1 },
                    { from: 4, how: 1 }
                ]}
                cols={[
                    { from: 1, how: 2 },
                    { from: 4, how: 1 }
                ]}
                type="flex"
            >
                <Simple textDecoration="line-through">{"Get in Touch"}</Simple>
            </Grid>
            <Grid
                rows={[
                    { from: 13, how: 1 },
                    { from: 5, how: 1 }
                ]}
                cols={[
                    { from: 1, how: 2 },
                    { from: 4, how: 1 }
                ]}
                type="flex"
            >
                <Simple textDecoration="line-through">{"Help"}</Simple>
            </Grid>
            <Grid
                rows={[
                    { from: 15, how: 1 },
                    { from: 6, how: 1 }
                ]}
                cols={[
                    { from: 1, how: 2 },
                    { from: 1, how: 1 }
                ]}
                type="flex"
            >
                <Body>{"Minsky 2020"} </Body>
            </Grid>
            <Grid
                rows={[
                    { from: 16, how: 1 },
                    { from: 7, how: 1 }
                ]}
                cols={[
                    { from: 1, how: 2 },
                    { from: 1, how: 1 }
                ]}
                type="flex"
            >
                <Simple> {"Made in    Perú    with love"} </Simple>
            </Grid>

            <Grid
                rows={[
                    { from: 17, how: 1 },
                    { from: 7, how: 1 }
                ]}
                cols={[
                    { from: 1, how: 2 },
                    { from: 3, how: 4 }
                ]}
                type="flex"
                justifySelf="center"
            >
                {["Linkedin", "Github", "Twitter"].map((socialNet, i) => (
                    <div key={i}>
                        <div
                            style={{
                                width: "32px",
                                height: "32px",
                                display: "flex",
                                marginLeft: "2em",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            {socialNet === "Linkedin" && (
                                <LinkedIn height={32} width={32} color={ColorTypes.black._50} />
                            )}
                            {socialNet === "Github" && <Github height={32} width={32} color={ColorTypes.black._50} />}
                            {socialNet === "Twitter" && <Twitter height={32} width={32} color={ColorTypes.black._50} />}
                        </div>
                        {/* <Simple alignText={"center"}>{socialNet}</Simple> */}
                    </div>
                ))}
            </Grid>
        </Grid>
    );
};
