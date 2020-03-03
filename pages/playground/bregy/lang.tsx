import React, { FunctionComponent } from "react";
import Head from "next/head";
import { Grid } from "../../../components/atoms/Grid/v2";
import LanguageSelector from "../../../components/molecules/LanguageSelector";

const IndexPage: FunctionComponent = () => {
    return (
        <div>
            <Head>
                <title>Minsky | Chatbots</title>
            </Head>
            <div>
                <h1>Grid Example</h1>
                <Grid debug p={{ all: "4rem" }}>
                    <LanguageSelector
                        languages={[
                            { little: "en", full: "EN - English" },
                            { little: "es", full: "ES - Spanish" }
                        ]}
                        onLanguageSelected={lng => {
                            console.log(lng);
                        }}
                    />
                </Grid>
            </div>
        </div>
    );
};

export default IndexPage;
