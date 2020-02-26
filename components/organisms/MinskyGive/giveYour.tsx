import React from "react";
import Grid from "../../atoms/Grid/v2";
import { Text } from "../../atoms/Text";
import { TextTypes } from "../../atoms/Text/constants";
import { GiveYouCards, GiveUProps } from "../../molecules/Cards/giveYouCard";
import BranchOutline from "../../atoms/Icon/BranchOutline"
import LoveOutline from "../../atoms/Icon/LoveOutline";
import Price from "../../atoms/Icon/PrizeOutline"
const DEBUG = false;

// title: string,
// icon: any,
// body:string,
const GiveYou = () => {
	const items: GiveUProps[] = [
		{
			title: "High level of service",
			body:
				"We respond to the needs and desires of customers, with the lowest possible cost and the highest level of quality and details.",
			icon: <LoveOutline color="black"/>
		},
		{
			title: "Constant maintenance",
			body:
				"We keep abreast of the latest technologies, test them and verify their effectiveness in the development of projects.",
			icon: <BranchOutline color="black"/>
		},
		{
			title: "Open development for the community",
			body:
				"Every time we take projects, micro technology and engines occur to us, which we make available to the community in order to improve the development of technology in the country.",
			icon: <Price color="black"/>
		}
	];

	return (
		<Grid
			debug={DEBUG}
			rowsTemplate={{ parts: 2, size: "auto" }}
			colsTemplate={[ { parts: 1, size: "auto" }, { parts: 1, size: "auto" }, { parts: 2, size: "auto" } ]}
			type={"grid"}
		>
			<Grid rows={{ from: 1, how: 1 }} cols={{ from: 1, how: 1 }} type={"block"}>
				<Text alignText="start" type={TextTypes.title}>
					We give you
				</Text>
			</Grid>
			<Grid rows={{ from: 2, how: 1 }} cols={{ from: 1, how: 1 }} type={"block"}>
				{items.map(value => {
					return <GiveYouCards body={value.body} icon={value.icon} title={value.title} />;
				})}
			</Grid>
			<Grid rows={{ from: 1, how: 2 }} cols={{ from: 2, how: 1 }} type="flex" justifyContent="center">
				<img src="/images/wegiveyou.png" alt={"We give you"} style={{ height: "100vh", width: "auto" }} />
			</Grid>
		</Grid>
	);
};

export { GiveYou };
