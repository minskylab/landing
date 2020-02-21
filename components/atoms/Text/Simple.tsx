import { Text, TextProps } from ".";
import { TextTypes } from "./constants";
import { FC } from "react";

const Title: FC<React.HTMLAttributes<any>> = (props: TextProps & React.HTMLAttributes<any>) => {
    props = { ...props, type: TextTypes.simple };
    return <Text {...props}>Hello World</Text>;
};

export default Title;
