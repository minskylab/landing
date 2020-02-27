import React, { FC } from "react";
import { TextProps } from "./types";
import Text, { MinskyFonts } from "./Text";
import { Presets } from "./presets";
import { AvailableElementTypes } from "./base";

const Simple: FC<TextProps> = (props: TextProps) => {
    return (
        <Text
            as={Presets.Simple.as as AvailableElementTypes}
            size={Presets.Simple.size}
            fontFamily={Presets.Simple.fontFamily as MinskyFonts}
            {...props}
        />
    );
};

export default Simple;
