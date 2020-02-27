import React, { FC } from "react";
import { TextProps } from "./types";
import Text, { MinskyFonts } from "./Text";
import { Presets } from "./presets";
import { AvailableElementTypes } from "./base";

const Important: FC<TextProps> = (props: TextProps) => {
    return (
        <Text
            as={Presets.Important.as as AvailableElementTypes}
            size={Presets.Important.size}
            fontFamily={Presets.Important.fontFamily as MinskyFonts}
            {...props}
        />
    );
};

export default Important;
