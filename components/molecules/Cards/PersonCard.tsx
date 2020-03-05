import React, { FC } from "react";
import { Grid } from "../../atoms/Grid/v2/index";
import { Subtitle, Simple } from "../../atoms/Text/v2";
import SocialNetwork, { SocialNetworkProps } from "../../atoms/Social";
import { styled } from "linaria/react";

const Wrapper = styled.div`
    border-radius: 0.6em;
    transition: 0.2s ease-in-out;
    &:hover {
        transform: translateY(-5px);
        -webkit-box-shadow: 0.895385px 3.58154px 13.4308px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0.895385px 3.58154px 13.4308px rgba(0, 0, 0, 0.1);
        box-shadow: 0.895385px 3.58154px 13.4308px rgba(0, 0, 0, 0.1);
    }
`;

export interface PersonCardProps {
    name: string;
    img: any;
    email?: string;
    tags?: string[];
    socialNet: SocialNetworkProps[];
}

const PersonCard: FC<PersonCardProps> = (props: PersonCardProps) => {
    return (
        <Wrapper>
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
                    {props.tags.map((value, i) => {
                        return (
                            <Simple key={i} textAlign={"center"} lineHeight={"2.3em"}>
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
                    {props.socialNet.map((value, i) => {
                        return (
                            <Grid
                                key={i}
                                rows={{ from: 1, how: 1 }}
                                type="flex"
                                cols={{ from: i, how: 1 }}
                                m={{ all: "0.5em" }}
                            >
                                <SocialNetwork link={value.link} type={value.type} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </Wrapper>
    );
};

export { PersonCard };
