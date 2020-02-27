import React, { FC } from "react";
import { TextProps } from "./types";
import Text, { MinskyFonts } from "./Text";
import { Presets } from "./presets";
import { AvailableElementTypes } from "./base";

const Subtitle2: FC<TextProps> = (props: TextProps) => {
    return (
        <Text
            as={Presets.Subtitle2.as as AvailableElementTypes}
            size={Presets.Subtitle2.size}
            fontFamily={Presets.Subtitle2.fontFamily as MinskyFonts}
            {...props}
        />
    );
};

export default Subtitle2;
