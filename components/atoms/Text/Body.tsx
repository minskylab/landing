import { Text, TextProps } from ".";
import { TextTypes, TextGeneralProps } from "./constants";
import { FC } from "react";

const Body: FC<TextGeneralProps & React.HTMLAttributes<any>> = (
    props: TextGeneralProps & TextProps & React.HTMLAttributes<any>
) => {
    props = { ...props, type: TextTypes.body };
    return <Text {...props}></Text>;
};

export default Body;
