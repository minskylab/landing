import React, { FC } from "react";
import { TextProps } from "./types";
import Text from "./Text";
import { Presets } from "./preset";
import { AvailableElementTypes } from "./base";

const Title: FC<TextProps> = (props: TextProps) => {
    return (
        <Text
            {...props}
            as={Presets.title.as as AvailableElementTypes}
            size={Presets.title.size}
            // fontFamily={Presets.title.fontFamily}
        ></Text>
    );
};

export default Title;
