import React, { FC } from "react";
import { TechCard } from "../../molecules/Cards/TechCard";
import { Grid } from "../../../components/atoms/Grid/v2";

import { Title, Simple, Subtitle, Body } from "../../atoms/Text/v2";
import NextI18NextInstance from "../../../general/i18n";
import GithubCard from "../../molecules/GithubCard";

import { css } from "linaria";
import { Repository } from "../../molecules/GithubCard/github";
import { NeocortexDefault, PlutusDefault, Pe2020ruDefault } from "./default";
import GithubOutline from "../../atoms/Icon/GithubOutline";

const seeMoreProjects = css`
    background-color: #fffcf0;
    /* border: solid #1b1b1b 1px; */
    border-radius: 0.4rem;
    text-align: center;
    transition: background-color 0.3s;
    :hover {
        cursor: pointer;
        background-color: #ffeda1;
    }
`;

export interface TecnologyCard {
    title: string;
    description: string;
    repository: string;
    default?: Repository;
}

const Technologies: FC = () => {
    const [t, i18n] = NextI18NextInstance.useTranslation();

    const projects: TecnologyCard[] = [
        {
            title: "Chatbots",
            description: "Multichannel technology",
            repository: "minskylab/neocortex",
            default: NeocortexDefault
        },
        {
            title: "Payment",
            description: "Multi payment gateway",
            repository: "minskylab/plutus",
            default: PlutusDefault
        },
        {
            title: "Just for fun",
            description: "Developing everything",
            repository: "minskylab/pe2020ru",
            default: Pe2020ruDefault
        }
    ];

    return (
        <Grid type={"grid"}>
            <Grid rows={{ from: 1, how: 1 }} cols={{ from: 1, how: 1 }} p={{ y: "1.5rem" }}>
                <Title bold>{t("technology_title")}</Title>
            </Grid>
            <Grid
                type={"grid"}
                p={{ y: "2.2rem" }}
                // rows={{ from: 2, how: 1 }}
                // cols={{ from: 1, how: 2 }}
                colsTemplate={[
                    { parts: 1, size: "1fr" },
                    { parts: 2, size: "1fr" },
                    { parts: 2, size: "1fr" }
                ]}
                rowGap={["1.8rem", "2rem"]}
                columnGap={["1.8rem", "6rem", "8rem"]}
            >
                {[
                    ...projects.map((value, index) => {
                        return (
                            <div key={index}>
                                <Grid>
                                    <Subtitle bold>{value.title}</Subtitle>
                                </Grid>
                                <Grid p={{ bottom: "0.8rem" }}>
                                    <Body>{value.description}</Body>
                                </Grid>
                                <GithubCard repo={value.repository} prefetchedRepo={value.default} />
                            </div>
                        );
                    }),
                    <div
                        key={"see more"}
                        style={{ display: "flex", flexFlow: "column", justifyContent: "center" }}
                        onClick={() => open("https://github.com/minskylab")}
                    >
                        <Grid
                            type={"grid"}
                            className={seeMoreProjects}
                            rowsTemplate={[
                                { parts: 3, size: "auto" },
                                { parts: 3, size: "1fr" }
                            ]}
                            colsTemplate={{ parts: 3, size: "auto" }}
                            alignItems={"end"}
                            rowGap={"0"}
                            columnGap={"0"}
                            m={{ top: "calc(1.8rem + 1.2rem + 1rem)" }}
                            p={[{ y: "1rem" }, {}]}
                        >
                            <Grid
                                type={["block", "flex"]}
                                rows={{ from: 2, how: 1 }}
                                cols={{ from: 2, how: 1 }}
                                alignItems={"center"}
                                justifyContent={"center"}
                            >
                                <GithubOutline width={24} height={24} color={"#1b1b1b"} />
                                <Grid m={[{}, { left: "1rem" }]}>
                                    <Simple textAlign={"center"}>See more projects at our Github</Simple>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                ]}
            </Grid>
        </Grid>
    );
};

export { Technologies };
