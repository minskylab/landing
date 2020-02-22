import { Text, TextProps } from ".";
import { TextTypes, TextGeneralProps } from "./constants";
import { FC } from "react";

const Simple: FC<TextGeneralProps & React.HTMLAttributes<any>> = (
    props: TextGeneralProps & TextProps & React.HTMLAttributes<any>
) => {
    props = { ...props, type: TextTypes.simple };
    return <Text {...props}></Text>;
};

export { Simple };
