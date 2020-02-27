import React, { FC } from "react";
import { TextProps } from "./types";
import Text, { MinskyFonts } from "./Text";
import { Presets } from "./presets";
import { AvailableElementTypes } from "./base";

const Tags: FC<TextProps> = (props: TextProps) => {
    return (
        <Text
            as={Presets.Tags.as as AvailableElementTypes}
            size={Presets.Tags.size}
            fontFamily={Presets.Tags.fontFamily as MinskyFonts}
            {...props}
        />
    );
};

export default Tags;
