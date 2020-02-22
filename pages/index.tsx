import React, { FunctionComponent } from "react";
import { styled } from "linaria/react";
import Head from "next/head";
import LinkedIn from "../components/atoms/Icon/LinkedIn";
import ColorTypes from "../components/atoms/Colors";

const Title = styled.h1`color: ${props => props.color};`;

const IndexPage: FunctionComponent = () => {
	return (
		<div>
			<Head>
				<title>Minsky | Home</title>
			</Head>
			<div>
				<Title color={"#ffdf53"}>Hello World</Title>
				<LinkedIn color={ColorTypes.yellow._10} />
			</div>
		</div>
	);
};

export default IndexPage;
