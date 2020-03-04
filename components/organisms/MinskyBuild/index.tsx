import React, { useState, useEffect } from "react";
import Grid from "../../atoms/Grid/v2";

import { css } from "linaria";
import BlobBackground from "../../atoms/BlobBackground";
import { Subtitle } from "../../atoms/Text/v2";
import NextI18NextInstance from "../../../general/i18n";

const wrapper = css`
    z-index: 0;
`;

const background = css`
    z-index: 1;
`;

const message = css`
    z-index: 2;
`;
const MinskyBuild = () => {
    const [blobSize, setBlobSize] = useState<Array<number>>([400, 400]);

    const [t, i18n] = NextI18NextInstance.useTranslation();

    useEffect(() => {
        if (window.innerWidth < 1400) {
            setBlobSize([320, 320]);
        } else if (window.innerWidth < 800) {
            setBlobSize([240, 240]);
        } else if (window.innerWidth < 600) {
            setBlobSize([200, 200]);
        }
    }, []);

    return (
        <Grid
            type={"grid"}
            className={wrapper}
            m={[{ top: "-7.5em" }, { top: "-8em" }, { top: "-10em" }]}
            alignItems={"center"}
            colsTemplate={{ parts: 3, size: "auto" }}
            rowsTemplate={{ parts: 3, size: "auto" }}
            justifyContent={"center"}
        >
            <Grid
                type={"flex"}
                cols={{ from: 2, how: 1 }}
                rows={{ from: 2, how: 1 }}
                className={background}
                justifyContent={"center"}
            >
                <BlobBackground width={blobSize[0]} height={blobSize[1]} />
            </Grid>
            <Grid
                cols={{ from: 2, how: 1 }}
                rows={{ from: 2, how: 1 }}
                p={{ x: "25vh" }}
                m={[{ x: "3em" }, { x: "25vh" }]}
                className={message}
            >
                <Subtitle textAlign={"center"}>{t("minsky_mision")}</Subtitle>
            </Grid>
        </Grid>
    );
};

export default MinskyBuild;
