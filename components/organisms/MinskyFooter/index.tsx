import React, { FC } from "react";
import Grid from "../../atoms/Grid/v2";

import { MinskyLogoIcon } from "../../atoms/Icon/icons";
import { Title, Body, Simple } from "../../atoms/Text/v2";

import { LinkedIn } from "../../../components/atoms/Icon";
import ColorTypes from "../../../components/atoms/Colors";
import Github from "../../../components/atoms/Icon/Github";
import Twitter from "../../../components/atoms/Icon/Twitter";
import { css } from "linaria";

const footerContainer = css`
    background-color: #ffdf53;
    padding: 2.8rem 0;
    /* 10vw 2.8rem 0; */
    /* clip-path: polygon(16% 0, 100% 0, 100% 100%, 0% 100%); */
    /* border-radius: 10rem; */
    z-index: 2;
`;

// const svgContainer = css`
//     z-index: -1;
//     position: relative;
//     bottom: 0;
//     right: 0;
// `;

export const Footer: FC = () => {
    return (
        <>
            {/* <svg
                className={svgContainer}
                // width="100%"
                // height="460"
                viewBox="0 0 1240 460"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 170.465C0 145.064 18.7432 123.735 43.9789 120.841C248.728 97.3581 1101.08 0 1158.64 0C1224.1 0 1240 80.0344 1240 125.892C1240 171.749 1240 460 1240 460H0V170.465Z"
                    fill="#FFDF53"
                />
            </svg> */}
            <Grid
                type="grid"
                className={footerContainer}
                rowsTemplate={[
                    { parts: 17, size: "auto" },
                    { parts: 7, size: "auto" }
                ]}
                colsTemplate={[
                    { parts: 2, size: "1fr" },
                    { parts: 4, size: "auto" }
                ]}
                justifyContent="flex-end"
                rowGap="1em"
                columnGap="5em"
            >
                <Grid
                    rows={[
                        { from: 1, how: 2 },
                        { from: 1, how: 1 }
                    ]}
                    cols={[
                        { from: 1, how: 2 },
                        { from: 1, how: 1 }
                    ]}
                    m={[{ bottom: "2em" }, { all: "0" }]}
                    type="flex"
                    justifyContent={["flex-end", "default"]}
                    alignItems={"center"}
                    p={[{ right: "1.8rem" }, {}]}
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
                    justifyContent={["flex-end", "default"]}
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
                    justifyContent={["flex-end", "default"]}
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
                    justifyContent={["flex-end", "default"]}
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
                    justifyContent={["flex-end", "default"]}
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
                    justifyContent={["flex-end", "default"]}
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
                    justifyContent={["flex-end", "default"]}
                    p={[{ right: "3.8rem" }, {}]}
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
                    justifyContent={["flex-end", "default"]}
                    p={[{ right: "3.8rem" }, {}]}
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
                    justifyContent={["flex-end", "default"]}
                    p={[{ right: "3.8rem" }, {}]}
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
                    justifyContent={["flex-end", "default"]}
                    p={[{ right: "3.8rem" }, {}]}
                >
                    <Simple textDecoration="line-through" textAlign={"end"}>
                        {"Video tutorials"}
                    </Simple>
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
                    justifyContent={["flex-end", "default"]}
                    p={[{ right: "3.8rem" }, {}]}
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
                    justifyContent={["flex-end", "default"]}
                    p={[{ right: "3.8rem" }, {}]}
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
                    justifyContent={["flex-end", "default"]}
                    p={[{ right: "3.8rem" }, {}]}
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
                    justifyContent={["flex-end", "default"]}
                    p={[{ right: "3.8rem" }, {}]}
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
                    justifyContent={["flex-end", "default"]}
                    p={[{ right: "3.8rem" }, {}]}
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
                    justifyContent={["flex-end", "default"]}
                    p={[{ right: "3.8rem" }, {}]}
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
                    justifyContent={["flex-end", "default"]}
                    p={[{ right: "3.8rem" }, {}]}
                >
                    <Body size={"0.875rem"}>{"Minsky 2020"} </Body>
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
                    justifyContent={["flex-end", "default"]}
                    p={[{ right: "3.8rem" }, {}]}
                >
                    <Simple> {"Made in 🇵🇪 with ❤️"} </Simple>
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
                    justifyContent={["flex-end", "default"]}
                    m={[{ top: "2rem" }, {}]}
                    p={[{ right: "3.8rem" }, {}]}
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
                                {socialNet === "Github" && (
                                    <Github height={32} width={32} color={ColorTypes.black._50} />
                                )}
                                {socialNet === "Twitter" && (
                                    <Twitter height={32} width={32} color={ColorTypes.black._50} />
                                )}
                            </div>
                            {/* <Simple alignText={"center"}>{socialNet}</Simple> */}
                        </div>
                    ))}
                </Grid>
            </Grid>
        </>
    );
};
