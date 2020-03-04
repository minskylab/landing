import { NextSeoProps } from "next-seo";

const DefaultSEOConfig: NextSeoProps = {
	openGraph: {
		type: "website",
		locale: "es_PE",
		url: "https://minsky.cc/",
		site_name: "Minsky Lab",
		images: [
			{
				url: "https://i.ibb.co/dcv40rX/minsky-square-1.png",
				alt: "Minsky",
				width: 638,
				height: 638
			}
		]
	},
	twitter: {
		handle: "@MinskyLab",
		site: "@MinskyLab",
		cardType: "summary_large_image"
	}
};

export default DefaultSEOConfig;
