import React from "react";
import Grid from "../../atoms/Grid/v2";

import { Value } from "../../molecules/Cards/Value";

import Section from "../../atoms/Text/Section";
import { defaultItems } from "../MinskyGive/default";
const DEBUG = false;

const GiveYou = () => {
    return (
        <Grid
            debug={DEBUG}
            rowsTemplate={[
                { parts: 3, size: "auto" },
                { parts: 2, size: "auto" }
            ]}
            colsTemplate={[
                { parts: 1, size: "1fr" },
                { parts: 2, size: "auto" }
            ]}
            type={"grid"}
        >
            <Grid
                rows={[
                    { from: 1, how: 1 },
                    { from: 1, how: 1 }
                ]}
                cols={[
                    { from: 1, how: 1 },
                    { from: 1, how: 1 }
                ]}
                p={{ y: "2em" }}
                type={"block"}
            >
                <Section>We give you</Section>
            </Grid>
            <Grid
                rows={[
                    { from: 2, how: 1 },
                    { from: 2, how: 1 }
                ]}
                cols={[
                    { from: 1, how: 1 },
                    { from: 1, how: 1 }
                ]}
                type={"block"}
            >
                {defaultItems.map(value => {
                    return <Value body={value.body} icon={value.icon} title={value.title} />;
                })}
            </Grid>
            <Grid
                rows={[
                    { from: 3, how: 1 },
                    { from: 1, how: 2 }
                ]}
                cols={[
                    { from: 1, how: 1 },
                    { from: 2, how: 1 }
                ]}
                type="flex"
                justifyContent="center"
            >
                <img src="/images/wegiveyou.png" alt={"We give you"} style={{ height: "auto", width: "45vh" }} />
            </Grid>
        </Grid>
    );
};

export { GiveYou };
