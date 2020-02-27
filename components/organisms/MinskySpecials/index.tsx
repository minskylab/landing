import React, { FC } from "react";
import { Grid } from "../../atoms/Grid/v2/index";

import { SpecialCard } from "../../molecules/Cards/SpecialCard";

import { defaultItems } from "../MinskySpecials/default";
import { Title } from "../../atoms/Text/v2";

const Specials: FC = () => {
    return (
        <Grid>
            <Grid p={{ y: "1.5rem" }}>
                <Title bold>Our Specials</Title>
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
                {defaultItems.map((value, key) => {
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
