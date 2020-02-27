import React, { FC } from "react";
import { TextProps } from "./types";
import Text, { MinskyFonts } from "./Text";
import { Presets } from "./presets";
import { AvailableElementTypes } from "./base";

const SubtitlePT: FC<TextProps> = (props: TextProps) => {
    return (
        <Text
            as={Presets.SubtitlePT.as as AvailableElementTypes}
            size={Presets.SubtitlePT.size}
            fontFamily={Presets.SubtitlePT.fontFamily as MinskyFonts}
            {...props}
        />
    );
};

export default SubtitlePT;
