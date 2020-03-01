import { NextSeoProps } from "next-seo";

const DefaultSEOConfig: NextSeoProps = {
	openGraph: {
		type: "website",
		locale: "es_PE",
		url: "https://minsky.cc/",
		site_name: "Minsky Lab"
	},
	twitter: {
		handle: "@MinskyLab",
		site: "@MinskyLab",
		cardType: "summary_large_image"
	}
};

export default DefaultSEOConfig;
