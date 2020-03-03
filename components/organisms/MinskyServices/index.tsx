import React, { FC } from "react";
import { Grid } from "../../atoms/Grid/v2";

import { ServiceCard } from "../../molecules/Cards/ServiceCard";
import { Title } from "../../atoms/Text/v2";
import NextI18NextInstance from "../../../general/i18n";

export type ContentServiceCard = {
    icon: any;
    title: string;
    body: string;
};

const Services: FC = () => {
    const [t, i18n] = NextI18NextInstance.useTranslation();

    const services: ContentServiceCard[] = [
        {
            icon: <img src="/images/ideation.png" alt="Ideation" height="48px" width="48px" />,
            title: t("ideation_title"),
            body: t("ideation_definition")
        },
        {
            icon: <img src="/images/design.png" alt="Design" height="48px" width="48px" />,
            title: t("product_design_title"),
            body: t("product_design_definition")
        },
        {
            icon: <img src="/images/development.png" alt="Development" height="48px" width="48px" />,
            title: t("web_mobile_dev_title"),
            body: t("web_mobile_dev_definition")
        },
        {
            icon: <img src="/images/devOps.png" alt="DevOps" height="48px" width="48px" />,
            title: t("devops_cloud_title"),
            body: t("devops_cloud_definition")
        }
    ];

    return (
        <Grid>
            <Grid p={{ y: "1.5rem" }}>
                <Title bold>{t("services_title")}</Title>
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
                {services.map((value, key) => {
                    return <ServiceCard key={key} body={value.body} icon={value.icon} title={value.title} />;
                })}
            </Grid>
        </Grid>
    );
};

export { Services };
