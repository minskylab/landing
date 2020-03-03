import React, { FC } from "react";
import { Grid } from "../../atoms/Grid/v2/index";

import { SpecialCard, SpecialProps } from "../../molecules/Cards/SpecialCard";

import { Title } from "../../atoms/Text/v2";
import NextI18NextInstance from "../../../general/i18n";

const Specials: FC = () => {
    const [t, i18n] = NextI18NextInstance.useTranslation();

    const specials: SpecialProps[] = [
        {
            image: (
                <img src="/images/softDev.png" alt="Software Development" style={{ height: "25vh", width: "auto" }} />
            ),
            title: t("software_development_title"),
            topics: t("software_development_items")
                .split(",")
                .map(t => t.trim()),
            iconTopic: (
                <img
                    src="/images/blobpoint.svg"
                    alt="Software Develpment"
                    style={{ height: "0.8rem", width: "auto" }}
                />
            )
        },
        {
            image: (
                <img
                    src="/images/blockchain.png"
                    alt="Blockchain Solutions"
                    style={{ height: "25vh", width: "auto" }}
                />
            ),
            title: t("blockchain_title"),
            topics: t("blockchain_items")
                .split(",")
                .map(t => t.trim()),
            iconTopic: <img src="/images/blobpoint.svg" alt="Blockchain" style={{ height: "0.8rem", width: "auto" }} />
        },
        {
            image: <img src="/images/iot.png" alt="Iot" style={{ height: "25vh", width: "auto" }} />,
            title: t("iot_embedded_title"),
            topics: t("iot_embedded_items")
                .split(",")
                .map(t => t.trim()),
            iconTopic: <img src="/images/blobpoint.svg" alt="Iot" style={{ height: "0.8rem", width: "auto" }} />
        }
    ];

    return (
        <Grid>
            <Grid p={{ y: "1.5rem" }}>
                <Title bold>{t("specials_title")}</Title>
            </Grid>
            <Grid
                type={"grid"}
                colsTemplate={[
                    { parts: 1, size: "1fr" }, // sm
                    { parts: 3, size: "1fr" }, // md
                    { parts: 3, size: "1fr" } //  lg
                ]}
                rowsTemplate={{ parts: 1, size: "auto" }}
                gridAutoFlow={"row"}
                rowGap="1em"
                columnGap="3.6rem"
                p={{ y: "2.4rem" }}
            >
                {specials.map((value, key) => {
                    return (
                        <SpecialCard
                            key={key}
                            image={value.image}
                            title={value.title}
                            topics={value.topics}
                            iconTopic={value.iconTopic}
                        />
                    );
                })}
            </Grid>
        </Grid>
    );
};

export { Specials };
