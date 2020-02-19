import React, { FunctionComponent } from "react";
import { styled } from "linaria/react";
import Head from "next/head";

const Title = styled.h1`
    color: ${props => props.color};
`;

const IndexPage: FunctionComponent = () => {
    return (
        <div>
            <Head>
                <title>Minsky | Home</title>
            </Head>
            <div>
                <Title color={"#ffdf53"}>Hello World</Title>
            </div>
        </div>
    );
};

export default IndexPage;
