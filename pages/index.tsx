import React, { FunctionComponent, useState, useEffect, useRef, useLayoutEffect } from "react";
import { styled } from "linaria/react";
import Head from "next/head";
import Title from "../components/atoms/Text/Title";
import { Grid } from "../components/atoms/Grid/v2";
import { MinskyLogoIcon, MenuIcon } from "../components/atoms/Icon/icons";
import { Button } from "../components/atoms/Button";
import VerticalMenu from "../components/atoms/VerticalMenu";
import { Simple } from "../components/atoms/Text/Simple";
import Body from "../components/atoms/Text/Body";
import { LightBulbs } from "../components/atoms/Scene/LightBulbs";
import MinskyTopBar from "../components/organisms/MInskyTopBar";
import { Services } from "../components/organisms/MinskyService/index";
import { Technologys } from "../components/organisms/MinskyTechnology/index";
import { Team } from "../components/organisms/MinskyTeam/index";
import { LinkedIn } from "../components/atoms/Icon";
import ColorTypes from "../components/atoms/Colors";
import Github from "../components/atoms/Icon/Github";
import Twitter from "../components/atoms/Icon/Twitter";
import { Specialties } from "../components/organisms/MinskySpecialities/index";
import { GiveYou } from "../components/organisms/MinskyGive/giveYour";
import { ContactUs } from "../components/organisms/MinskyContact/index";
import { Footer } from "../components/organisms/MinskyFooter/index";
import { Text } from "../components/atoms/Text";
import { TextTypes } from "../components/atoms/Text/constants";

const Background = styled.div`
	z-index: -1;
	position: absolute;
	top: 0;
	left: 0;
`;

const items = [
	{ key: "home", name: "Home" },
	{ key: "services", name: "Our Services" },
	{ key: "team", name: "Our Team" },
	{ key: "technologies", name: "Our Technologies" }
];

const DEBUG_MODE = false;

const IndexPage: FunctionComponent = () => {
	const [ currentPage, setCurrentPage ] = useState<string>("home");
	const [ renderPhysics, setRenderPhysics ] = useState<boolean>(false);
	const [ topBarShow, setTopBarShow ] = useState<boolean>(false);

	useEffect(() => {
		if (window.innerWidth > 970) {
			setRenderPhysics(true);
		}
	}, []);

	return (
		<div>
			<Head>
				<title>Minsky | Home</title>
				<meta name="theme-color" content="#ffdf53" />
			</Head>
			{renderPhysics && (
				<Background>
					<LightBulbs />
				</Background>
			)}
			<MinskyTopBar active={true} />
			<Grid
				debug={DEBUG_MODE}
				type={[ "block", "block", "grid" ]}
				colsTemplate={{ raw: "repeat(3, 1fr)" }}
				rowsTemplate={{ raw: "repeat(6, auto)" }}
				m={{ x: "2em", y: "2em" }}
			>
				<Grid debug={DEBUG_MODE} rows={{ from: 2, how: 1 }} cols={{ from: 2, how: 1 }}>
					<Grid
						debug={DEBUG_MODE}
						m={[ { all: "25vh 0.5em 0 0.5em" }, { all: "34vh 4.2em 0 4.2em" }, { all: "34vh 2em 0 2em" } ]}
					>
						<Title alignText={"center"}> MINSKY </Title>
						<div style={{ height: "1em" }} />
						<Text alignText={"center"} type={TextTypes.subtitlePT} fontSize={"0.8em"} lineHeight={"1.5em"}>
							A new technological perspective for your ideas.
						</Text>
						<Grid
							debug={DEBUG_MODE}
							type={"grid"}
							justifyItems={"center"}
							colsTemplate={{ raw: "repeat(3, 1fr)" }}
							gridAutoFlow={"row"}
							m={[ { x: "0.4em", y: "1.8em" }, { x: "1.8em", y: "1.8em" } ]}
						>
							{[ "Linkedin", "Github", "Twitter" ].map((socialNet, i) => (
								<div key={i}>
									<div
										style={{
											width: "32px",
											height: "32px",
											display: "flex",
											margin: "auto",
											justifyContent: "center",
											alignItems: "center"
										}}
									>
										{socialNet === "Linkedin" && <LinkedIn height={32} width={32} color={ColorTypes.black._50} />}
										{socialNet === "Github" && <Github height={32} width={32} color={ColorTypes.black._50} />}
										{socialNet === "Twitter" && <Twitter height={32} width={32} color={ColorTypes.black._50} />}
									</div>
									{/* <Simple alignText={"center"}>{socialNet}</Simple> */}
								</div>
							))}
						</Grid>
						<Grid debug={DEBUG_MODE} type={[ "flex", "none" ]} justifyContent={"center"}>
							<Button primary>Contact Us</Button>
						</Grid>
					</Grid>
				</Grid>
				<Grid
					debug={DEBUG_MODE}
					rows={{ from: 3, how: 1 }}
					cols={{ from: 2, how: 1 }}
					m={[ { top: "15vh" }, { top: "25vh" } ]}
				>
					<Grid debug={DEBUG_MODE} type={"flex"} justifyContent={"center"}>
						<Grid debug={DEBUG_MODE}>
							<Simple>Learn more</Simple>
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
			<Grid
				type="block"
				debug={DEBUG_MODE}
				p={[ { x: "1rem", y: "4rem" }, { x: "3rem", y: "4rem" }, { x: "15vh", y: "4rem" } ]}
			>
				<Services />
			</Grid>
			<Grid
				type="block"
				debug={DEBUG_MODE}
				p={[ { x: "1rem", y: "4rem" }, { x: "3rem", y: "4rem" }, { x: "15vh", y: "4rem" } ]}
			>
				<Specialties />
			</Grid>
			<Grid
				type="block"
				debug={DEBUG_MODE}
				p={[ { x: "1rem", y: "4rem" }, { x: "3rem", y: "4rem" }, { x: "15vh", y: "4rem" } ]}
			>
				<Technologys />
			</Grid>

			<Grid
				type="block"
				debug={DEBUG_MODE}
				p={[ { x: "1rem", y: "4rem" }, { x: "3rem", y: "4rem" }, { x: "15vh", y: "4rem" } ]}
			>
				<GiveYou />
			</Grid>
			<Grid
				type="block"
				debug={DEBUG_MODE}
				p={[ { x: "5vh", y: "4rem" }, { x: "3rem", y: "4rem" }, { x: "15vh", y: "4rem" } ]}
			>
				<Team />
			</Grid>
			{/* Deprecated <Grid
				type="block"
				debug={DEBUG_MODE}
				p={[ { x: "1rem", y: "4rem" }, { x: "3rem", y: "4rem" }, { x: "50vh", y: "4rem" } ]}
			>
				<ContactUs />
			</Grid> */}
			<Grid
				type="block"
				debug={DEBUG_MODE}
				p={[ { x: "1rem", y: "4rem" }, { x: "3rem", y: "4rem" }, { x: "15vh", y: "4rem" } ]}
			>
				<Footer />
			</Grid>
		</div>
	);
};

export default IndexPage;
