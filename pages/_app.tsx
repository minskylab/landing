import { useEffect } from "react";
import { AppProps } from "next/app";
import Fonts from "../general/Fonts";

const MinskyApp = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        Fonts();
    });
    return <Component {...pageProps} />;
};

export default MinskyApp;
