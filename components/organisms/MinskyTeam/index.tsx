import React from "react";

import { TeamCards, TeamProps } from "../../molecules/Cards/teamCard";
import { Grid } from "../../atoms/Grid/v2";
import { Text } from "../../atoms/Text";
import { TextTypes } from "../../atoms/Text/constants";
import Section from "../../atoms/Text/Section";

// name: string,
// img: any,
// email: string,
// tags?: string[],
// socialNet: any[],

const DEBUG = false;
const Team = () => {
	const items: TeamProps[] = [
		{
			img: (
				<img src="/images/blob.svg" style={{ height: "50%", width: "50%", maxHeight: "180px", maxWidth: "180px" }} />
			),
			tags: [ "Backend", "Frontend", "CatLover" ],
			name: "Antonio Toche",
			socialNet: [ "Github", "Linkedin" ]
		},
		{
			img: (
				<img src="/images/blob.svg" style={{ height: "50%", width: "50%", maxHeight: "180px", maxWidth: "180px" }} />
			),
			tags: [ "UXIUResearch", "FrontEnd", "DataAnalyst" ],
			name: "María Noriega",
			socialNet: [ "Github", "Linkedin" ]
		},
		{
			img: (
				<img src="/images/blob.svg" style={{ height: "50%", width: "50%", maxHeight: "180px", maxWidth: "180px" }} />
			),
			tags: [ "Inventor", "Developer", "UXIUResearch" ],
			name: "Bregy Malpartida",
			socialNet: [ "Github", "Linkedin" ]
		},
		{
			img: (
				<img src="/images/blob.svg" style={{ height: "50%", width: "50%", maxHeight: "180px", maxWidth: "180px" }} />
			),
			tags: [ "Scientist", "Psychologist", "ComputationalLover" ],
			name: "Carlos Almenara",
			socialNet: [ "Github", "Linkedin", "Twitter" ]
		}
	];

	return (
		<Grid debug={DEBUG} rowsTemplate={[ { parts: 2 } ]} type={"block"}>
			<Grid p={{ x: "2em", y: "1.5em" }} rows={{ from: 1, how: 1 }} cols={{ from: 1, how: 1 }} type={"block"}>
				<Section>Main Team</Section>
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
				columnGap="1em"
				p={{ x: "1em", y: "1em" }}
				debug={DEBUG}
			>
				{items.map(value => {
					return (
						<TeamCards
							name={value.name}
							img={value.img}
							tags={value.tags}
							email={value.email}
							socialNet={value.socialNet}
						/>
					);
				})}
			</Grid>
		</Grid>
	);
};

export { Team };
