import React, { FC } from "react";

import { Grid } from "../../atoms/Grid/v2";

import Section from "../../atoms/Text/Section";
import { defaultItems } from "./default";
import { PersonCard } from "../../molecules/Cards/personCard";
import { Title } from "../../atoms/Text/v2";

const DEBUG = false;
const Team: FC = () => {
    return (
        <Grid>
            <Grid p={{ y: "1.5rem" }}>
                <Title bold>Main Team</Title>
            </Grid>
            <Grid
                type={"grid"}
                colsTemplate={[
                    { parts: 1, size: "1fr" }, // sm
                    { parts: 2, size: "1fr" }, // md
                    { parts: 4, size: "1fr" } //  lg
                ]}
                rowsTemplate={{ parts: 1, size: "auto" }}
                gridAutoFlow={"row"}
                columnGap="1.2em"
                p={{ x: "5%", y: "2em" }}
                debug={DEBUG}
            >
                {defaultItems.map(value => {
                    return (
                        <PersonCard
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
