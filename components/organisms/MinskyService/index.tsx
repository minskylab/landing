import React from "react";
import { Grid } from "../../atoms/Grid/v2";
import { Text } from "../../atoms/Text/index";
import { TextTypes } from "../../atoms/Text/constants";
import { ContentServiceCards } from "../../molecules/Cards/constants";
import { ServicesCard } from "../../molecules/Cards/serviceCard";
import Section from "../../atoms/Text/Section";

const DEBUG = false;

const Services = () => {
	const items: ContentServiceCards[] = [
		{
			icon: <img src="/images/ideation.png" alt="Ideation" height="48px" width="48px" />,
			title: "Ideation and Strategy",
			body: "We offer experience in building a new product."
		},
		{
			icon: <img src="/images/design.png" alt="Design" height="48px" width="48px" />,
			title: "Product Design",
			body: "We will create a beufiful and working design for your idea."
		},
		{
			icon: <img src="/images/development.png" alt="Development" height="48px" width="48px" />,
			title: "Web and Mobile Development",
			body: "We specialise in delivering end-to-end services."
		},
		{
			icon: <img src="/images/devOps.png" alt="DevOps" height="48px" width="48px" />,
			title: "DevOps and Cloud",
			body: "We use modern microservices approach for your software."
		}
	];
	return (
		<Grid debug={DEBUG} rowsTemplate={[ { parts: 2 } ]} type={"block"}>
			<Grid p={{ x: "2em", y: "1em" }} rows={{ from: 1, how: 1 }} cols={{ from: 1, how: 1 }} type={"block"}>
				<Section>Our services</Section>
			</Grid>
			<Grid
				type={"grid"}
				colsTemplate={[
					{ parts: 1, size: "1fr" }, // sm
					{ parts: 2, size: "1fr" }, // md
					{ parts: 4, size: "1fr" } //  lg
				]}
				rowsTemplate={{ parts: 1, size: "auto" }}
				gridAutoFlow={"row"}
				columnGap="2em"
				rowGap="1em"
				p={{ x: "1.2em", y: "2em" }}
				debug={DEBUG}
			>
				{items.map(value => {
					return <ServicesCard body={value.body} icon={value.icon} title={value.title} />;
				})}
			</Grid>
		</Grid>
	);
};

export { Services };
