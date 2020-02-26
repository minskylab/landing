import React from "react";
import { TechCards } from "../../molecules/Cards/technologyCard";
import { Grid } from "../../../components/atoms/Grid/v2";

import { Text } from "../../../components/atoms/Text/index";
import { TextTypes } from "../../../components/atoms/Text/constants";
import { ContentServiceCards } from "../../molecules/Cards/constants";
import Section from "../../atoms/Text/Section";
import ArrowRightOutline from "../../atoms/Icon/ArrowRightOutline";
import ColorTypes from "../../atoms/Colors";

const DEBUG = false;

const Technologys = () => {
	const items: ContentServiceCards[] = [
		{
			icon: <ArrowRightOutline color={ColorTypes.black._50} />,
			title: "Chatbots",
			body: "Multichannel technology"
		},
		{
			icon: <ArrowRightOutline color={ColorTypes.black._50} />,
			title: "Payment",
			body: "Multi payment gateway"
		},
		{
			icon: <ArrowRightOutline color={ColorTypes.black._50} />,
			title: "Just for fun",
			body: "Developing everything"
		}
	];
	return (
		<Grid
			debug={DEBUG}
			rowsTemplate={{ parts: 2, size: "auto" }}
			colsTemplate={[ { parts: 1, size: "auto" }, { parts: 2, size: "1fr" }, { parts: 2, size: "1fr" } ]}
			type={"grid"}
		>
			<Grid p={{ x: "2em", y: "1em" }} rows={{ from: 1, how: 1 }} cols={{ from: 1, how: 1 }} type={"block"}>
				<Section>Our Technology</Section>
			</Grid>
			<Grid
				p={{ x: "2.2em", y: "2em" }}
				rows={{ from: 2, how: 1 }}
				cols={{ from: 1, how: 1 }}
				colsTemplate={[
					{ parts: 1, size: "1fr" }, // sm
					{ parts: 1, size: "1fr" }, // md
					{ parts: 1, size: "1fr" } //  lg
				]}
				gridAutoFlow={"row"}
				rowGap="1em"
				// debug={DEBUG}
				type={"grid"}
			>
				{items.map((value, index) => {
					return <TechCards key={index} body={value.body} icon={value.icon} title={value.title} />;
				})}
			</Grid>
		</Grid>
	);
};

export { Technologys };
