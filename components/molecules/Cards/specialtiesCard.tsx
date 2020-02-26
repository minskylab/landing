import React, { FC } from "react";
import { Grid } from "../../atoms/Grid/v2";
import { Text } from "../../atoms/Text";
import { TextTypes } from "../../atoms/Text/constants";
import { CardWrapper } from "./constants";

export interface SpecialtiesProps {
	image?: any;
	title: string;
	topics: string[];
	iconTopic: any;
}

const SpecialtiesCards: FC<SpecialtiesProps> = (props: SpecialtiesProps) => {
	return (
		<CardWrapper>
			<Grid
				rowsTemplate={{ parts: 3, size: "auto" }}
				type="grid"
				colsTemplate={{ parts: 1 }}
				justifyItems="start"
				p={{ all: "1.8em" }}
			>
				<Grid rows={{ from: 1, how: 1 }} cols={{ from: 1, how: 1 }} type="flex" justifySelf="center">
					{props.image}
				</Grid>
				<Grid rows={{ from: 2, how: 1 }} cols={{ from: 1, how: 1 }} type="flex">
					<Text fontSize={"0.95em"} type={TextTypes.subtitlePT}>
						{props.title}
					</Text>
				</Grid>
				<Grid rows={{ from: 3, how: 1 }} cols={{ from: 1, how: 1 }} type="block">
					{props.topics.map(values => {
						return (
							<div
								style={{
									display: "flex",
									alignItems: "center",
									alignContent: "center"
								}}
							>
								<div style={{ paddingRight: 7, transform: "translateY(-1px)" }}>{props.iconTopic}</div>
								<Text type={TextTypes.simple} lineHeight={"2em"} style={{ margin: "3px" }}>
									{values}
								</Text>
							</div>
						);
					})}
				</Grid>
			</Grid>
		</CardWrapper>
	);
};

export { SpecialtiesCards };
