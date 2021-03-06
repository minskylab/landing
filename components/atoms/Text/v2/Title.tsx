import React, { FC } from "react";
import { TextProps } from "./types";
import Text, { MinskyFonts } from "./Text";
import { Presets } from "./presets";
import { AvailableElementTypes } from "./base";

const Title: FC<TextProps> = (props: TextProps) => {
    return (
        <Text
            as={Presets.Title.as as AvailableElementTypes}
            size={Presets.Title.size}
            fontFamily={Presets.Title.fontFamily as MinskyFonts}
            {...props}
        />
    );
};

export default Title;
