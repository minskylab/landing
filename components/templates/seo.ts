import { NextSeoProps } from "next-seo";

const DefaultSEOConfig: NextSeoProps = {
    openGraph: {
        type: "website",
        locale: "es_PE",
        url: "https://minsky.cc/",
        site_name: "Minsky Lab"
    },
    twitter: {
        handle: "@handle", // TODO (mariagnoriegag) fill with our social net
        site: "@site", // TODO (mariagnoriegag) fill with our social net
        cardType: "summary_large_image" // TODO (mariagnoriegag) fill with our social net
    }
};

export default DefaultSEOConfig;
