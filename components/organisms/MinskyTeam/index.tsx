import React from "react";

import { TeamCards } from "../../molecules/Cards/teamCard";
import { Grid } from "../../atoms/Grid/v2";
import { Text } from "../../atoms/Text";
import { TextTypes } from "../../atoms/Text/constants";

const DEBUG = false;
const Team = () => {
	const items = [
		{
			img: "as",
			other: "Chatbots",
			body: "Multichannel technology.",
			name: "asdasda",
			socialNet: [ "Github", "Linkedin" ]
		},
		{
			img: "as",
			other: "Payment",
			body: "Multi payment gateway.",
			name: "asdasda",
			socialNet: [ "Github", "Linkedin" ]
		},
		{
			img: "as",
			other: "Just for fun",
			body: "Developing everything.",
			name: "asdasda",
			socialNet: [ "Github", "Linkedin" ]
		},
		{
			img: "as",
			other: "Jsdasdadn",
			body: "Devsadsdeloping everything.",
			name: "asssddaddsdddasda",
			socialNet: [ "Github", "Linkedin", "Twitter" ]
		}
	];

	return (
		<Grid debug={DEBUG} rowsTemplate={[ { parts: 2 } ]} type={"block"}>
			<Grid rows={{ from: 1, how: 1 }} cols={{ from: 1, how: 1 }} type={"block"}>
				<Text alignText="start" type={TextTypes.h4}>
					Our Team
				</Text>
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
							body={value.body}
							img={value.img}
							other={value.other}
							name={value.name}
							socialNet={value.socialNet}
						/>
					);
				})}
			</Grid>
		</Grid>
	);
};

export { Team };
