import React from "react";
import { Text } from "../../components/atoms/Text";
import Title from "../../components/atoms/Text/Title";
import { TextTypes } from "../../components/atoms/Text/constants";
import Head from "next/head";
import Subtitle from "../../components/atoms/Text/Subtitle";
import Body from "../../components/atoms/Text/Body";
import { Simple } from "../../components/atoms/Text/Simple";
import { Grid } from "../../components/atoms/Grid/v2";
import MinskyTopBar from "../../components/organisms/MInskyTopBar";

const Playground = () => {
    return (
        <div>
            <Head>
                <title>Minsky | Lab</title>
            </Head>
            <MinskyTopBar active={true} />
            <div>
                <Text type={TextTypes.title}>Hello World</Text>
                <Text type={TextTypes.subtitle}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                <Text type={TextTypes.body}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                <Text type={TextTypes.simple}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
            </div>
            <div>
                <Title>Hello World</Title>
                <Subtitle>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Subtitle>
                <Body>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Body>
                <Simple>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Simple>
            </div>
            <div>
                <Grid
                    type={"grid"}
                    colsTemplate={[
                        { parts: 2, size: "1fr" }, // sm
                        { parts: 3, size: "1fr" }, // md
                        { parts: 4, size: "1fr" } //  lg
                    ]}
                    gridAutoFlow={"row"}
                    rowsTemplate={{ parts: 4, size: "1fr" }}
                >
                    <div style={{ height: "200px", width: "100%", backgroundColor: "#ffdf5311" }}>1</div>
                    <div style={{ height: "200px", width: "100%", backgroundColor: "#ffdf5321" }}>2</div>
                    <div style={{ height: "200px", width: "100%", backgroundColor: "#ffdf5331" }}>3</div>
                    <div style={{ height: "200px", width: "100%", backgroundColor: "#ffdf5341" }}>4</div>
                    <div style={{ height: "200px", width: "100%", backgroundColor: "#ffdf5351" }}>5</div>
                    <div style={{ height: "200px", width: "100%", backgroundColor: "#ffdf5361" }}>6</div>
                    <div style={{ height: "200px", width: "100%", backgroundColor: "#ffdf5371" }}>7</div>
                    <div style={{ height: "200px", width: "100%", backgroundColor: "#ffdf5381" }}>8</div>
                    <div style={{ height: "200px", width: "100%", backgroundColor: "#ffdf5381" }}>8</div>

                </Grid>
            </div>
        </div>
    );
};

export default Playground;
