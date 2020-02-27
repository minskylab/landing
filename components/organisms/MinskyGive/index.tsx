import React from "react";
import Grid from "../../atoms/Grid/v2";

import { Value } from "../../molecules/Cards/Value";

import Section from "../../atoms/Text/Section";
import { defaultItems } from "../MinskyGive/default";
import { Title } from "../../atoms/Text/v2";
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
                { parts: 2, size: "1fr" }
            ]}
            type={"grid"}
            alignItems={"start"}
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
                p={{ y: "1.5rem" }}
            >
                <Title bold>We give you</Title>
            </Grid>
            <Grid
                type={"grid"}
                rowsTemplate={{ parts: defaultItems.length, size: "1fr" }}
                colsTemplate={{ parts: 1, size: "auto" }}
                rowGap={"1rem"}
                m={{ bottom: "2.4rem" }}
            >
                {defaultItems.map((value, key) => {
                    return <Value key={key} body={value.body} icon={value.icon} title={value.title} />;
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
                justifyContent="start"
                m={[{}, { top: "4rem", bottom: "4rem", right: "4rem" }]}
            >
                <img src="/images/wegiveyou.png" alt={"We give you"} style={{ height: "auto", width: "100%" }} />
            </Grid>
        </Grid>
    );
};

export { GiveYou };
