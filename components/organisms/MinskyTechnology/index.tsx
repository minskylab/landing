import React, { FC } from "react";
import { TechCard } from "../../molecules/Cards/TechCard";
import { Grid } from "../../../components/atoms/Grid/v2";

import { defaultItems } from "../MinskyTechnology/default";
import { Title, Simple } from "../../atoms/Text/v2";
import NextI18NextInstance from "../../../general/i18n";

const Technologies: FC = () => {
    const [t, i18n] = NextI18NextInstance.useTranslation();

    return (
        <Grid
            rowsTemplate={{ parts: 2, size: "auto" }}
            colsTemplate={[
                { parts: 1, size: "auto" },
                { parts: 2, size: "1fr" },
                { parts: 2, size: "1fr" }
            ]}
            type={"grid"}
        >
            <Grid rows={{ from: 1, how: 1 }} cols={{ from: 1, how: 1 }} p={{ y: "1.5rem" }}>
                <Title bold>{t("technology_title")}</Title>
            </Grid>
            <Grid
                type={"grid"}
                p={{ y: "2.2rem" }}
                rows={{ from: 2, how: 1 }}
                cols={{ from: 1, how: 1 }}
                rowsTemplate={{ parts: defaultItems.length, size: "1fr" }}
                colsTemplate={{ parts: 1, size: "auto" }}
                rowGap={"1.8rem"}
            >
                {defaultItems.map((value, index) => {
                    return <TechCard key={index} title={value.title} description={value.description} />;
                })}
            </Grid>
            <Grid type={["none", "none", "block"]} rows={{ from: 1, how: 2 }} cols={{ from: 2, how: 1 }}>
                <Simple>Rendering projects...</Simple>
            </Grid>
        </Grid>
    );
};

export { Technologies };
