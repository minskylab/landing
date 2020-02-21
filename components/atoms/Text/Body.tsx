import { Text, TextProps } from ".";
import { TextTypes } from "./constants";
import { FC } from "react";

const Body: FC<React.HTMLAttributes<any>> = (props: TextProps & React.HTMLAttributes<any>) => {
    props = { ...props, type: TextTypes.body };
    return <Text {...props}>Hello World</Text>;
};

export default Body;
