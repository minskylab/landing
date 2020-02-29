import React, { FC, useState } from "react";
import Grid from "../../../atoms/Grid/v2";
import { Title, Subtitle, Important, Body, Subtitle2, Simple } from "../../../atoms/Text/v2";
import { styled } from "linaria/react";
import Input from "../../../atoms/Input";
import { Button } from "../../../atoms/Button";
import EnhancedInput from "./input";
import { Form } from "@unform/web";

const BulbImage = styled.div`
    background-image: url("/images/uplightbulb.png");
    width: 20rem;
    height: 30rem;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
`;

const MinskyContact: FC = () => {
    const handleSubmit = data => {
        console.log(data);
    };

    return (
        <Grid
            type={"grid"}
            rowsTemplate={[
                { parts: 3, size: "auto" },
                { parts: 3, size: "auto" }
            ]}
            colsTemplate={[{}, { parts: 2, size: "auto" }]}
            p={[{ y: "2rem" }, { x: "4rem", y: "3.8rem" }]}
            rowGap={["2rem", ""]}
        >
            <Grid rows={{ from: 1, how: 1 }} cols={{ from: 1, how: 1 }}>
                <Subtitle bold>Contact Us</Subtitle>
                <Body>We can meet to drink coffee and talk in comfy place.</Body>
            </Grid>
            <Grid rows={{ from: 2, how: 1 }} cols={{ from: 1, how: 1 }}>
                <Simple bold>Email</Simple>
                <Important color={"#424242"}>hello@minsky.cc</Important>
                <div style={{ width: "100%", height: "1rem" }} /> {/* spacer */}
                <Simple bold>Phone | Telegram | WhatsApp</Simple>
                <Important color={"#424242"}>+51 961 818 237</Important>
            </Grid>
            <Grid rows={{ from: 3, how: 1 }} cols={{ from: 1, how: 1 }} p={[{}, { right: "12rem" }]}>
                <Form onSubmit={handleSubmit}>
                    <EnhancedInput
                        name={"email"}
                        type={"email"}
                        label={"Email"}
                        placeholder={"youremail@example.com"}
                        helperText={"Introduce your email where we'll write to you"}
                    />
                    <div style={{ marginTop: "1rem" }}>
                        <Button primary type={"submit"}>
                            Stay Tuned
                        </Button>
                    </div>
                </Form>
            </Grid>
            <Grid
                type={["none", "flex"]}
                rows={{ from: 1, how: 3 }}
                cols={{ from: 2, how: 1 }}
                justifyContent={"center"}
            >
                <BulbImage />
            </Grid>
        </Grid>
    );
};

export default MinskyContact;
