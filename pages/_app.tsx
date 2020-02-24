import { useEffect } from "react";
import { AppProps } from "next/app";
import Fonts from "../general/Fonts";
import BasicTemplate from "../components/templates/BasicTemplate";
import Head from "next/head";

const MinskyApp = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        Fonts();
    });

    return (
        <BasicTemplate>
            <Component {...pageProps} />
        </BasicTemplate>
    );
};

export default MinskyApp;
