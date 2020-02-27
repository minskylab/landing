import { AvailableElementTypes } from "./base";
import { MinskyFonts } from "./Text";

interface Preset {
    as: AvailableElementTypes;
    size: string;
    fontFamily: MinskyFonts;
}
interface TextPresets {
    Title: Preset;
    Subtitle: Preset;
    Subtitle2: Preset;
    Body: Preset;
    H1: Preset;
    H2: Preset;
    H3: Preset;
    H4: Preset;
    H5: Preset;
    H6: Preset;
    Simple: Preset;
    Text: Preset;
    SubtitlePT: Preset;
    Tags: Preset;
    Important: Preset;
}

export const Presets: TextPresets = {
    Title: { as: "h1", size: "1.6em", fontFamily: "Rubik" },
    Subtitle: { as: "h2", size: "1.2em", fontFamily: "Karla" },
    Subtitle2: { as: "h3", size: "1.2em", fontFamily: "PT Mono" },
    Body: { as: "p", size: "0.875em", fontFamily: "Karla" },
    H1: { as: "h1", size: "1.6em", fontFamily: "Karla" },
    H2: { as: "h2", size: "1.2em", fontFamily: "Karla" },
    H3: { as: "h3", size: "1.4em", fontFamily: "Karla" },
    H4: { as: "h4", size: "1.3em", fontFamily: "Karla" },
    H5: { as: "h5", size: "1.2em", fontFamily: "Karla" },
    H6: { as: "h6", size: "1.1em", fontFamily: "Karla" },
    Simple: { as: "p", size: "0.75em", fontFamily: "PT Mono" },
    Text: { as: "p", size: "0.75em", fontFamily: "PT Mono" },
    SubtitlePT: { as: "h2", size: "1.1em", fontFamily: "PT Mono" },
    Tags: { as: "h2", size: "0.65em", fontFamily: "PT Mono" },
    Important: { as: "p", size: "1rem", fontFamily: "PT Mono" }
};
