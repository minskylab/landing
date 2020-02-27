import React, { FC } from "react";
import { TextProps } from "./types";
import Text, { MinskyFonts } from "./Text";
import { Presets } from "./presets";
import { AvailableElementTypes } from "./base";

const Subtitle: FC<TextProps> = (props: TextProps) => {
    return (
        <Text
            as={Presets.Subtitle.as as AvailableElementTypes}
            size={Presets.Subtitle.size}
            fontFamily={Presets.Subtitle.fontFamily as MinskyFonts}
            {...props}
        />
    );
};

export default Subtitle;
