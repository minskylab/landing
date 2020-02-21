import { Text, TextProps } from ".";
import { TextTypes } from "./constants";
import { FC } from "react";

const Subtitle: FC<React.HTMLAttributes<any>> = (props: TextProps & React.HTMLAttributes<any>) => {
    props = { ...props, type: TextTypes.subtitle };
    return <Text {...props}>Hello World</Text>;
};

export default Subtitle;
