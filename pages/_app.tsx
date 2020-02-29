import { useEffect } from "react";
import { AppProps } from "next/app";
import Fonts from "../general/Fonts";
import BasicTemplate from "../components/templates/BasicTemplate";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import DefaultSEOConfig from "../components/templates/seo";

const MinskyApp = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        Fonts();
    });

    return (
        <BasicTemplate>
            <DefaultSeo {...DefaultSEOConfig} />
            <Component {...pageProps} />
        </BasicTemplate>
    );
};

export default MinskyApp;
