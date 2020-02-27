import React, { FC } from "react";
import { TextProps } from "./types";
import Text, { MinskyFonts } from "./Text";
import { Presets } from "./presets";
import { AvailableElementTypes } from "./base";

const Body: FC<TextProps> = (props: TextProps) => {
    return (
        <Text
            as={Presets.Body.as as AvailableElementTypes}
            size={Presets.Body.size}
            fontFamily={Presets.Body.fontFamily as MinskyFonts}
            {...props}
        />
    );
};

export default Body;
