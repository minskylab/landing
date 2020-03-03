import React, { FC } from "react";
import Grid from "../../atoms/Grid/v2";

import { MinskyLogoIcon } from "../../atoms/Icon/icons";
import { Title, Body, Simple } from "../../atoms/Text/v2";

import { LinkedIn } from "../../../components/atoms/Icon";
import ColorTypes from "../../../components/atoms/Colors";
import Github from "../../../components/atoms/Icon/Github";
import Twitter from "../../../components/atoms/Icon/Twitter";
import { css } from "linaria";
import NextI18NextInstance from "../../../general/i18n";


const TEXT_COLOR = "#fffcf0";
const BACKGROUND_COLOR = "#1b1b1b"; /*#0f0d16;*/

const footerContainer = css`
    background-color: ${BACKGROUND_COLOR};
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
    const [t, i18n] = NextI18NextInstance.useTranslation("footer");
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
                    fill=TEXT_COLOR
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
                    <MinskyLogoIcon color={TEXT_COLOR} />
                    <Title color={TEXT_COLOR} textAlign={"center"} bold m={{ left: "0.4rem" }}>
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
                    <Body color={TEXT_COLOR} bold>
                        {t("about_us_title")}
                    </Body>
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
                    <Simple color={TEXT_COLOR}> {t("about_us_home")} </Simple>
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
                    <Simple color={TEXT_COLOR}>{t("about_us_history")}</Simple>
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
                    <Simple color={TEXT_COLOR} textDecoration="line-through">
                        {t("about_us_products")}
                    </Simple>
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
                    <Simple color={TEXT_COLOR}> {t("about_us_jobs")} </Simple>
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
                    p={[{ right: "2rem" }, {}]}
                >
                    <Body color={TEXT_COLOR} bold>
                        {t("resources_title")}
                    </Body>
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
                    p={[{ right: "2rem" }, {}]}
                >
                    <Simple color={TEXT_COLOR} textDecoration="line-through">
                        {t("resources_faq")}
                    </Simple>
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
                    p={[{ right: "2rem" }, {}]}
                >
                    <Simple color={TEXT_COLOR} textDecoration="line-through">
                        {t("resources_blog")}
                    </Simple>
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
                    p={[{ right: "2rem" }, {}]}
                >
                    <Simple color={TEXT_COLOR} textDecoration="line-through" textAlign={"end"}>
                        {t("resources_tutorials")}
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
                    p={[{ right: "2rem" }, {}]}
                >
                    <Simple color={TEXT_COLOR}>{t("resources_developers")}</Simple>
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
                    p={[{ right: "2rem" }, {}]}
                >
                    <Body color={TEXT_COLOR} bold>
                        {t("useful_title")}
                    </Body>
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
                    p={[{ right: "2rem" }, {}]}
                >
                    <Simple color={TEXT_COLOR} textDecoration="line-through">
                        {t("useful_terms_and_conditions")}
                    </Simple>
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
                    p={[{ right: "2rem" }, {}]}
                >
                    <Simple color={TEXT_COLOR} textDecoration="line-through">
                        {t("useful_privacy_police")}
                    </Simple>
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
                    p={[{ right: "2rem" }, {}]}
                >
                    <Simple color={TEXT_COLOR} textDecoration="line-through">
                        {t("useful_get_in_touch")}
                    </Simple>
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
                    p={[{ right: "2rem" }, {}]}
                >
                    <Simple color={TEXT_COLOR} textDecoration="line-through">
                        {t("useful_help")}
                    </Simple>
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
                    p={[{ right: "2rem" }, {}]}
                >
                    <Body color={TEXT_COLOR} size={"0.875rem"}>
                        {"Minsky 2020"}{" "}
                    </Body>
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
                    p={[{ right: "2rem" }, {}]}
                >
                    <Simple color={TEXT_COLOR}> {"Made in 🇵🇪 with ❤️"} </Simple>
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
                    p={[{ right: "2rem" }, {}]}
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
                            {/* <Simple color={TEXT_COLOR} alignText={"center"}>{socialNet}</Simple> */}
                        </div>
                    ))}
                </Grid>
            </Grid>
        </>
    );
};
