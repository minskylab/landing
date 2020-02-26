import { Text, TextProps } from ".";
import { TextTypes, TextGeneralProps } from "./constants";
import { FC } from "react";
import ColorTypes from "../Colors";

const TechnologyDescription: FC<TextGeneralProps & React.HTMLAttributes<any>> = (
	props: TextGeneralProps & TextProps & React.HTMLAttributes<any>
) => {
	props = { ...props, type: TextTypes.simple };
	return <Text {...props} lineHeight={"1.7em"} fontSize={"0.7em"} color={ColorTypes.black._40} />;
};

export { TechnologyDescription };
