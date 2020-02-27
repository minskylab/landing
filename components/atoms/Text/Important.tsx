import { Text, TextProps } from ".";
import { TextTypes, TextGeneralProps } from "./constants";
import { FC } from "react";

const Important: FC<TextGeneralProps & React.HTMLAttributes<any>> = (
    props: TextGeneralProps & TextProps & React.HTMLAttributes<any>
) => {
    props = { ...props, type: TextTypes.important };
    return <Text {...props}></Text>;
};

export default Important;
