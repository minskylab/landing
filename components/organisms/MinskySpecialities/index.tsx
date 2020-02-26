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
			image: <img src="/images/softDev.png" alt="Software Development" style={{ height: "25vh", width: "auto" }} />,
			title: "Software Development",
			topics: [
				"IT Consulting",
				"DevOps Services",
				"Mobile and Web Apps",
				"Maintenance and Support",
				"IA and Machine Learing Development"
			],
			iconTopic: <img src="/images/blobpoint.svg" style={{ height: "0.65em", width: "auto" }} />
		},
		{
			image: <img src="/images/blockchain.png" alt="Blockchain Solutions" style={{ height: "25vh", width: "auto" }} />,
			title: "Blockchain Solutions",
			topics: [ "Business Consulting", "Cross-Border payments", "Blockchain for Business", "Product Development" ],
			iconTopic: <img src="/images/blobpoint.svg" style={{ height: "0.65em", width: "auto" }} />
		},
		{
			image: <img src="/images/iot.png" alt="Iot" style={{ height: "25vh", width: "auto" }} />,
			title: "Iot",
			topics: [ "Hardware Development", "Prototyping", "System Design", "Consulting" ],
			iconTopic: <img src="/images/blobpoint.svg" style={{ height: "0.65em", width: "auto" }} />
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
				columnGap="1.8em"
				rowGap="1em"
				p={{ x: "8.5%", y: "2em" }}
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
