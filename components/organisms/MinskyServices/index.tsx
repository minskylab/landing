import React, { FC } from "react";
import { Grid } from "../../atoms/Grid/v2";

import { ServiceCard } from "../../molecules/Cards/ServiceCard";
import { defaultItems } from "./default";
import { Title } from "../../atoms/Text/v2";

const Services: FC = () => {
    return (
        <Grid>
            <Grid p={{ y: "1.5rem" }}>
                <Title bold>Our services</Title>
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
                rowGap="1rem"
                p={{ y: "2.4rem" }}
            >
                {defaultItems.map((value, key) => {
                    return <ServiceCard key={key} body={value.body} icon={value.icon} title={value.title} />;
                })}
            </Grid>
        </Grid>
    );
};

export { Services };
