import { Text, TextProps } from ".";
import { TextTypes, TextGeneralProps } from "./constants";
import { FC } from "react";

const Section: FC<TextGeneralProps & React.HTMLAttributes<any>> = (
	props: TextGeneralProps & TextProps & React.HTMLAttributes<any>
) => {
	const fontWeight = 700;
	const alignText = "start";
	props = { ...props, type: TextTypes.h1, fontWeight, alignText };
	return <Text {...props} />;
};

export default Section;
