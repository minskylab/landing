import React, { FC } from "react";
import Grid from "../../atoms/Grid/v2";
import { Text } from "../../atoms/Text";
import { TextTypes } from "../../atoms/Text/constants";

export interface GiveUProps {
	title: string;
	icon: any;
	body: string;
}

const GiveYouCards: FC<GiveUProps> = (props: GiveUProps) => {
	return (
		<Grid
			type="grid"
			colsTemplate={{ parts: 2, size: "auto" }}
			rowsTemplate={{ parts: 2, size: "auto" }}
			m={{ all: "2em" }}
			rowGap={"0em"}
		>
			<Grid
				rows={{ from: 1, how: 1 }}
				cols={{ from: 1, how: 1 }}
				justifySelf="start"
				alignSelf="start"
				m={{ right: "1em" }}
			>
				<div style={{ transform: "translateY(-3px)" }}>{props.icon}</div>
			</Grid>
			<Grid
				type={"grid"}
				rowGap={"1em"}
				rows={{ from: 1, how: 1 }}
				cols={{ from: 2, how: 1 }}
				justifySelf="end"
				alignSelf="center"
			>
				<Grid rows={{ from: 1, how: 1 }} cols={{ from: 2, how: 1 }} type="block">
					<Text type={TextTypes.h2} fontSize={"0.9em"} fontWeight={600}>
						{props.title}
					</Text>
				</Grid>
				<Grid rows={{ from: 2, how: 1 }} cols={{ from: 2, how: 1 }} type="block">
					<Text type={TextTypes.text} lineHeight={"1.5em"}>
						{props.body}
					</Text>
				</Grid>
			</Grid>
		</Grid>
	);
};

export { GiveYouCards };
