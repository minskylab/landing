import NextI18Next from "next-i18next";

const NextI18NextInstance = new NextI18Next({
    defaultLanguage: "es",
    otherLanguages: ["en"]
});

export default NextI18NextInstance;
