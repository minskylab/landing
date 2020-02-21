import { Text, TextProps } from ".";
import { TextTypes } from "./constants";
import { FC } from "react";

interface TextGeneralProps {
    alignText?: "start" | "end" | "center" | "justify" | "stretch" | "default" | "inherit" | "left" | "right";
}

const Title: FC<TextGeneralProps & React.HTMLAttributes<any>> = (
    props: TextGeneralProps & TextProps & React.HTMLAttributes<any>
) => {
    props = { ...props, type: TextTypes.title };
    return <Text {...props}>Hello World</Text>;
};

export default Title;
