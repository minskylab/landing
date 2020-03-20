import { useEffect } from "react";
import { AppProps, AppContext } from "next/app";
import Fonts from "../general/Fonts";
import BasicTemplate from "../components/templates/BasicTemplate";

import { DefaultSeo } from "next-seo";
import DefaultSEOConfig from "../components/templates/seo";

import NextI18Next from "../general/i18n";

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

// MinskyApp.getInitialProps = async (appContext: AppContext) => {
//     const props = appContext.Component.getInitialProps(appContext.ctx);
//     console.log(props);
//     return props;
// };

export default NextI18Next.appWithTranslation(MinskyApp);
