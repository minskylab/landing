import React, { FunctionComponent } from "react";
import { styled } from "linaria/react";
import Head from "next/head";
import { Button } from "../components/atoms/Buttom/index"
import {ButtonType}from"../components/atoms/Buttom/constants"
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
                <Button style={ButtonType}>Hello World</Button>
            </div>
        </div>
    );
};

export default IndexPage;
