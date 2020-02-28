import React from "react";
import Grid from "../../atoms/Grid/v2";

import { css } from "linaria";
import BlobBackground from "../../atoms/BlobBackground";
import { Subtitle } from "../../atoms/Text/v2";

const wrapper = css``;

const background = css`
    z-index: 1;
`;

const message = css`
    z-index: 2;
`;
const MinskyBuild = () => {
    return (
        <Grid
            type={"grid"}
            className={wrapper}
            p={{ y: "1rem" }}
            alignItems={"center"}
            colsTemplate={{ parts: 3, size: "1fr" }}
            rowsTemplate={{ parts: 3, size: "auto" }}
        >
            <Grid cols={{ from: 2, how: 1 }} rows={{ from: 2, how: 1 }} className={background}>
                <BlobBackground width={400} height={400} />
            </Grid>
            <Grid cols={{ from: 2, how: 1 }} rows={{ from: 2, how: 1 }} className={message} p={{ x: "2.2rem" }}>
                <Subtitle textAlign={"center"}>
                    We <b>design</b> and <b>build</b> digital products
                </Subtitle>
            </Grid>
        </Grid>
    );
};

export default MinskyBuild;
