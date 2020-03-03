import React, { FC } from "react";
import Grid from "../../atoms/Grid/v2";
import { Text, Simple } from "../../atoms/Text/v2";
import LinkedInOutline from "../../atoms/Icon/LinkedInOutline";
import GithubOutline from "../../atoms/Icon/GithubOutline";
import TwitterOutline from "../../atoms/Icon/TwitterOutline";
import { Button } from "../../atoms/Button";
import LittleNetwork, { SocialNetwork } from "./LittleNetwork";
import NextI18NextInstance from "../../../general/i18n";

const minskySocialNetworks: SocialNetwork[] = [
    { kind: "linkedin", link: "https://www.linkedin.com/company/minskylab" },
    { kind: "github", link: "https://github.com/minskylab" },
    { kind: "twitter", link: "https://twitter.com/MinskyLab" }
];

interface MinskySplashProps {}

const MinskySplash: FC<MinskySplashProps> = (props: MinskySplashProps) => {
    const [t, i18n] = NextI18NextInstance.useTranslation();

    return (
        <Grid
            type={["block", "block", "grid"]}
            colsTemplate={{ raw: "repeat(3, 1fr)" }}
            rowsTemplate={{ raw: "repeat(6, auto)" }}
            m={{ x: "2rem", y: "2rem" }}
        >
            <Grid rows={{ from: 2, how: 1 }} cols={{ from: 2, how: 1 }}>
                <Grid m={[{ all: "28vh 2rem 0 2rem" }, { all: "34vh 4.2em 0 4.2em" }, { all: "34vh 2em 0 2em" }]}>
                    <Text as={"h1"} size={"2.5rem"} bold textAlign={"center"} fontFamily={"Rubik"}>
                        MINSKY
                    </Text>
                    <div style={{ height: "1em" }} />
                    <Text textAlign={"center"} size={"0.8rem"} lineHeight={"1.5em"} fontFamily={"PT Mono"}>
                        {t("first_message")}
                    </Text>
                    <Grid
                        type={"grid"}
                        justifyItems={"center"}
                        colsTemplate={{ raw: "repeat(3, 1fr)" }}
                        gridAutoFlow={"row"}
                        m={[
                            { x: "1rem", y: "1.8em" },
                            { x: "2rem", y: "1.8em" },
                            { x: "2.6rem", y: "1.8em" }
                        ]}
                    >
                        {minskySocialNetworks.map((socialNet, i) => (
                            <LittleNetwork key={i} value={socialNet} />
                        ))}
                    </Grid>
                    <Grid type={["flex", "none"]} justifyContent={"center"}>
                        <Button primary>{t("contact_us")}</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid rows={{ from: 3, how: 1 }} cols={{ from: 2, how: 1 }} m={[{ top: "15vh" }, { top: "25vh" }]}>
                <Grid type={"flex"} justifyContent={"center"}>
                    <Grid>
                        <Simple>{t("learn_more")}</Simple>
                        <div
                            style={{
                                height: "12em",
                                width: "0.1em",
                                maxWidth: "0.1em",
                                backgroundColor: "#1a1d25",
                                margin: "auto"
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MinskySplash;
