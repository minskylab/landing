import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { Repository } from "./github";
import { styled } from "linaria/react";
import Grid from "../../atoms/Grid/v2";
import { Title, Subtitle, Simple, Tags, Body, Important } from "../../atoms/Text/v2";
import { Button } from "../../atoms/Button";
import { css } from "linaria";

const Wrapper = styled.div`
    background-color: #fffcf0;
    /* width: min-content; */
    border: solid #1b1b1b 1px;
    border-radius: 0.4rem;
`;

const descriptionText = css`
    /* width: fit-content; */
`;

const starButtonWrapper = css`
    width: -webkit-fill-available;
`;

const header = css`
    width: 100%;
    grid-template-columns: max-content;
`;

const avatar = css`
    width: min-content;
`;

interface GithubCardProps {
    repo: string;
    prefetchedRepo?: Repository;
}

const GITHUB_BASE = "https://api.github.com/repos/";
const GithubCard: FC<GithubCardProps> = (props: GithubCardProps) => {
    let repo = props.repo;
    const [repository, setRepository] = useState<Repository>(props.prefetchedRepo);

    if (props.repo.startsWith("https://")) {
        const chunks = props.repo.split("github.com/");
        repo = chunks[chunks.length - 1];
    }

    useEffect(() => {
        fetchRepo().then((r: Repository) => {
            setRepository(r);
        });
    }, []);

    const fetchRepo = async (): Promise<Repository> => {
        const url = `${GITHUB_BASE}${props.repo}`;
        const r = await axios.get(url);
        const repo: Repository = r.data as Repository;
        return repo;
    };

    return (
        <Wrapper>
            <Grid
                type={"grid"}
                colsTemplate={{ parts: 3, size: "auto" }}
                rowsTemplate={[
                    { parts: 4, size: "auto" },
                    { parts: 3, size: "auto" }
                ]}
                p={{ x: "1.2rem", y: "1rem" }}
                rowGap={"0"}
                columnGap={"0"}
            >
                <Grid
                    type={"grid"}
                    rows={[
                        { from: 1, how: 1 },
                        { from: 1, how: 1 }
                    ]}
                    cols={[
                        { from: 1, how: 2 },
                        { from: 1, how: 2 }
                    ]}
                    colsTemplate={{ parts: 2, size: "auto" }}
                    rowsTemplate={[
                        { parts: 3, size: "auto" },
                        { parts: 2, size: "auto" }
                    ]}
                    // justifyContent={"start"}
                    alignContent={"center"}
                    rowGap={"0"}
                    columnGap={"0"}
                    className={header}
                >
                    <Grid cols={{ from: 1, how: 1 }} rows={{ from: 1, how: 3 }} type={"flex"} className={avatar}>
                        <img
                            src={repository && repository.owner && repository.owner.avatar_url}
                            width={"64px"}
                            height={"64px"}
                        ></img>
                    </Grid>
                    <Grid
                        type={"flex"}
                        cols={{ from: 2, how: 1 }}
                        rows={{ from: 1, how: 1 }}
                        m={{ left: "1rem" }}
                        alignItems={"center"}
                        justifyContent={"flex-start"}
                    >
                        <Subtitle bold>{repository && repository.name}</Subtitle>
                        <Simple m={{ left: "0.5rem" }}>{repository && repository.language}</Simple>
                        <Grid type={["none", "flex"]} justifyContent={"flex-end"} className={starButtonWrapper}>
                            <Button
                                secondary
                                compact
                                style={{ marginLeft: "4rem" }}
                                onClick={() =>
                                    open(
                                        `https://github.com/${repository &&
                                            repository.owner &&
                                            repository.owner.login}/${repository && repository.name}`
                                    )
                                }
                            >
                                ★ Star
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid type={"flex"} cols={{ from: 2, how: 1 }} rows={{ from: 2, how: 1 }} m={{ left: "1rem" }}>
                        <Tags>Created by {repository && repository.owner.login}</Tags>
                    </Grid>
                </Grid>
                <Grid
                    className={descriptionText}
                    type={"flex"}
                    rows={[
                        { from: 3, how: 1 },
                        { from: 2, how: 1 }
                    ]}
                    cols={{ from: 1, how: 2 }}
                    m={[{}, { top: "1rem" }]}
                    rowGap={"0"}
                    // alignItems={"center"}
                >
                    <Body>{repository && repository.description}</Body>
                </Grid>
                <Grid
                    type={"flex"}
                    rows={[
                        { from: 4, how: 1 },
                        { from: 3, how: 1 }
                    ]}
                    cols={{ from: 1, how: 2 }}
                    alignItems={"center"}
                    m={{ top: "1rem" }}
                >
                    <Body bold>
                        total stars: {repository && repository.stargazers_count} | forks:{" "}
                        {repository && repository.forks_count}
                    </Body>
                    <Grid type={["flex", "none"]} m={{ left: "auto" }}>
                        <Button
                            secondary
                            compact
                            onClick={() =>
                                open(
                                    `https://github.com/${repository &&
                                        repository.owner &&
                                        repository.owner.login}/${repository && repository.name}`
                                )
                            }
                        >
                            ★ Star
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Wrapper>
    );
};

export default GithubCard;
