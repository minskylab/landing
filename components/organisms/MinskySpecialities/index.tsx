import React, { FC } from "react";
import { Grid } from "../../atoms/Grid/v2/index";

import { SpecialtiesCards, SpecialtiesProps } from "../../molecules/Cards/specialtiesCard";
import { Text } from "../../atoms/Text";
import { TextTypes } from "../../atoms/Text/constants";
import { LinkedIn } from "../../atoms/Icon";
import Section from "../../atoms/Text/Section";

const DEBUG = false;

const Specialties = () => {
	const items: SpecialtiesProps[] = [
		{
			image: <img src="/images/softDev.png" alt="Software Development" height="256px" width="256px" />,
			title: "Software Development",
			topics: [
				"IT Consulting",
				"DevOps Services",
				"Mobile and Web Apps",
				"Maintenance and Support",
				"IA and Machine Learing Development"
			],
			iconTopic: <img src="/images/blob.svg" width="16px" height="16px" />
		},
		{
			image: <img src="/images/blockchain.png" alt="Blockchain Solutions" height="256px" width="256px" />,
			title: "Blockchain Solutions",
			topics: [ "Business Consulting", "Cross-Border payments", "Blockchain for Business", "Product Development" ],
			iconTopic: <img src="/images/blob.svg" width="16px" height="16px" />
		},
		{
			image: <img src="/images/iot.png" alt="Iot" height="256px" width="256px" />,
			title: "Iot",
			topics: [ "Hardarware Development", "Prototyping", "System Design", "Consulting" ],
			iconTopic: <img src="/images/blob.svg" width="16px" height="16px" />
		}
	];

	return (
		<Grid debug={DEBUG} rowsTemplate={[ { parts: 2 } ]} type={"block"}>
			<Grid p={{ x: "2em", y: "1em" }} rows={{ from: 1, how: 1 }} cols={{ from: 1, how: 1 }} type={"block"}>
				<Section>Our specialties</Section>
			</Grid>
			<Grid
				type={"grid"}
				colsTemplate={[
					{ parts: 1, size: "1fr" }, // sm
					{ parts: 3, size: "1fr" }, // md
					{ parts: 3, size: "1fr" } //  lg
				]}
				rowsTemplate={{ parts: 1, size: "auto" }}
				gridAutoFlow={"row"}
				columnGap="2.8em"
				rowGap="1em"
				p={{ x: "2em", y: "2em" }}
				debug={DEBUG}
			>
				{items.map(value => {
					return (
						<SpecialtiesCards
							image={value.image}
							title={value.title}
							topics={value.topics}
							iconTopic={value.iconTopic}
						/>
					);
				})}
			</Grid>
		</Grid>
	);
};

export { Specialties };
