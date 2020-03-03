import NextI18Next from "next-i18next";

const NextI18NextInstance = new NextI18Next({
    defaultLanguage: "en",
    otherLanguages: ["es"]
});

export default NextI18NextInstance;
