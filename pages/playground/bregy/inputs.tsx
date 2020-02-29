import React, { FC, useState } from "react";
import Head from "next/head";
import Grid from "../../../components/atoms/Grid/v2";
import Input from "../../../components/atoms/Input";

const InputsShowcasePage: FC = () => {
    const [email, setEmail] = useState<string>("");
    return (
        <div>
            <Head>
                <title>Minsky | Lab</title>
            </Head>

            <Grid p={{ all: "2rem" }}>
                <Grid p={{ all: "0.2rem" }} debug>
                    <Input
                        type={"text"}
                        value={email}
                        onChange={e => setEmail(e.target.nodeValue)}
                        label={"Email"}
                        placeholder={"example@example.com"}
                    />
                    <Input
                        type={"text"}
                        value={email}
                        onChange={e => setEmail(e.target.nodeValue)}
                        label={"Email"}
                        placeholder={"example@example.com"}
                        helperText={"Here put your email"}
                    />
                    <Input
                        type={"text"}
                        prefix={"USD"}
                        value={email}
                        onChange={e => setEmail(e.target.nodeValue)}
                        label={"Email"}
                        placeholder={"example@example.com"}
                        helperText={"Here put your email"}
                        errorMessage={"Invalid email"}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default InputsShowcasePage;
