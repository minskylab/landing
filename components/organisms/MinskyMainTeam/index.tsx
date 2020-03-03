import React, { FC } from "react";

import { Grid } from "../../atoms/Grid/v2";

import { defaultItems } from "./default";
import { PersonCard } from "../../molecules/Cards/PersonCard";
import { Title } from "../../atoms/Text/v2";
import NextI18NextInstance from "../../../general/i18n";

const Team: FC = () => {
    const [t, i18n] = NextI18NextInstance.useTranslation();

    return (
        <Grid>
            <Grid p={{ y: "1.5rem" }}>
                <Title bold>{t("main_team_title")}</Title>
            </Grid>
            <Grid
                type={"grid"}
                colsTemplate={[
                    { parts: 1, size: "1fr" }, // sm
                    { parts: 2, size: "1fr" }, // md
                    { parts: 4, size: "1fr" } //  lg
                ]}
                rowsTemplate={{ parts: 1, size: "auto" }}
                columnGap="3.6rem"
                rowGap="3.2rem"
                p={{ y: "2.4rem" }}
            >
                {defaultItems.map((value, i) => {
                    return (
                        <PersonCard
                            key={i}
                            name={value.name}
                            img={value.img}
                            tags={value.tags}
                            email={value.email}
                            socialNet={value.socialNet}
                        />
                    );
                })}
            </Grid>
        </Grid>
    );
};

export { Team };
