import React from "react";

export interface TextType {
    as: React.ElementType;
    size: string;
    fontFamily: string;
}

export interface TextTypes {
    title: TextType;
    subtitle: TextType;
    body: TextType;
    h1: TextType;
    h2: TextType;
    h3: TextType;
    h4: TextType;
    h5: TextType;
    h6: TextType;
    simple: TextType;
    subtitlePT: TextType;
    tags: TextType;
    text: TextType;
    important: TextType;
}

export interface TextGeneralProps {
    alignText?: "start" | "end" | "center" | "justify" | "stretch" | "default" | "inherit" | "left" | "right";
}

export const TextTypes: TextTypes = {
    title: { as: "h1", size: "1.6em", fontFamily: "Rubik" },
    subtitle: { as: "h2", size: "1.2em", fontFamily: "Rubik" },
    body: { as: "p", size: "0.9em", fontFamily: "Karla" },
    h1: { as: "h1", size: "1.6em", fontFamily: "Karla" },
    h2: { as: "h2", size: "1.2em", fontFamily: "Karla" },
    h3: { as: "h3", size: "1.4em", fontFamily: "Karla" },
    h4: { as: "h4", size: "1.3em", fontFamily: "Karla" },
    h5: { as: "h5", size: "1.2em", fontFamily: "Karla" },
    h6: { as: "h6", size: "1.1em", fontFamily: "Karla" },
    simple: { as: "p", size: "0.8em", fontFamily: "PT Mono" },
    text: { as: "p", size: "0.7em", fontFamily: "PT Mono" },
    subtitlePT: { as: "h2", size: "1.1em", fontFamily: "PT Mono" },
    tags: { as: "h2", size: "0.65em", fontFamily: "PT Mono" },
    important: { as: "p", size: "1rem", fontFamily: "PT Mono" }
};
