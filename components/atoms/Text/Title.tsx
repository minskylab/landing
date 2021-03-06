import { Text, TextProps } from ".";
import { TextTypes, TextGeneralProps } from "./constants";
import { FC } from "react";

const Title: FC<TextGeneralProps & React.HTMLAttributes<any>> = (
	props: TextGeneralProps & TextProps & React.HTMLAttributes<any>
) => {
	props = { ...props, type: TextTypes.title, fontWeight: 900 };
	return <Text {...props} />;
};

export default Title;
