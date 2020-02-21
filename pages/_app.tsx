import { useEffect } from "react";
import Fonts from "../general/Fonts";

const MinskyApp = ({ Component, pageProps }) => {
    useEffect(() => {
        Fonts();
    });
    return <Component {...pageProps} />;
};

export default MinskyApp;
