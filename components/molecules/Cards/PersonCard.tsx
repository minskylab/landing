import React, { FC } from "react";
import { Grid } from "../../atoms/Grid/v2/index";
import { Text } from "../../atoms/Text";
import { TextTypes } from "../../atoms/Text/constants";

import { CardWrapper } from "./constants";
import ColorTypes from "../../atoms/Colors";
import { LinkedIn } from "../../atoms/Icon";
import Github from "../../atoms/Icon/Github";
import Twitter from "../../atoms/Icon/Twitter";
import LinkedInOutline from "../../atoms/Icon/LinkedInOutline";
import GithubOutline from "../../atoms/Icon/GithubOutline";
import TwitterOutline from "../../atoms/Icon/TwitterOutline";
import { Subtitle, Simple } from "../../atoms/Text/v2";

interface SocialNetwork {
    type: "github" | "linkedin" | "twitter" | "personal" | "researchgate";
    link?: string;
}

export interface PersonCardProps {
    name: string;
    img: any;
    email?: string;
    tags?: string[];
    socialNet: SocialNetwork[];
}

const PersonCard: FC<PersonCardProps> = (props: PersonCardProps) => {
    return (
        <CardWrapper>
            <Grid
                rowsTemplate={{ parts: 5, size: "auto" }}
                colsTemplate={{ parts: 1, size: "1fr" }}
                type="grid"
                p={{ x: "0.5em", y: "1.5em" }}
                rowGap="0.5em"
            >
                <Grid
                    rows={{ from: 1, how: 1 }}
                    type="flex"
                    cols={{ from: 1, how: 1 }}
                    justifyContent="center"
                    alignItems="center"
                    m={{ bottom: "1em" }}
                >
                    {props.img}
                </Grid>
                <Grid
                    rows={{ from: 2, how: 1 }}
                    type="flex"
                    cols={{ from: 1, how: 1 }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Subtitle textAlign={"center"} bold>
                        {props.name}
                    </Subtitle>
                </Grid>
                {/* <Grid
					rows={{ from: 3, how: 1 }}
					type="flex"
					cols={{ from: 1, how: 1 }}
					justifyContent="center"
					alignItems="center"
				>
					<Text type={TextTypes.simple} style={{ margin: "3px" }}>
						{props.email}
					</Text>
				</Grid> */}
                <Grid
                    rows={{ from: 4, how: 1 }}
                    type="block"
                    cols={{ from: 1, how: 1 }}
                    justifySelf={"center"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    {props.tags.map(value => {
                        return (
                            <Simple textAlign={"center"} lineHeight={"2.3em"}>
                                {"#" + value}
                            </Simple>
                        );
                    })}
                </Grid>
                <Grid
                    rows={{ from: 5, how: 1 }}
                    cols={{ from: 1, how: 1 }}
                    type="flex"
                    justifySelf="center"
                    columnGap="2em"
                >
                    {props.socialNet.map((value, index) => {
                        return (
                            <Grid
                                rows={{ from: 1, how: 1 }}
                                type="flex"
                                cols={{ from: index, how: 1 }}
                                m={{ all: "0.5em" }}
                            >
                                <div>
                                    {value.type === "linkedin" && (
                                        <LinkedInOutline height={24} width={24} color={ColorTypes.black._50} />
                                    )}
                                    {value.type === "github" && (
                                        <GithubOutline height={24} width={24} color={ColorTypes.black._50} />
                                    )}
                                    {value.type === "twitter" && (
                                        <TwitterOutline height={24} width={24} color={ColorTypes.black._50} />
                                    )}
                                </div>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </CardWrapper>
    );
};

export { PersonCard };
