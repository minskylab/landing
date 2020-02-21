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
}

export const TextTypes: TextTypes = {
    title: { as: "h1", size: "2em", fontFamily: "Rubik" },
    subtitle: { as: "h2", size: "1.2em", fontFamily: "Rubik" },
    body: { as: "span", size: "0.8em", fontFamily: "Karla" },
    h1: { as: "h1", size: "1em", fontFamily: "Karla" },
    h2: { as: "h2", size: "1em", fontFamily: "Karla" },
    h3: { as: "h3", size: "1em", fontFamily: "Karla" },
    h4: { as: "h4", size: "1em", fontFamily: "Karla" },
    h5: { as: "h5", size: "1em", fontFamily: "Karla" },
    h6: { as: "h6", size: "1em", fontFamily: "Karla" },
    simple: { as: "p", size: "0.6em", fontFamily: "Karla" }
};
