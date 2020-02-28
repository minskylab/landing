import React, { useState, useEffect } from "react";
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
    const [blobSize, setBlobSize] = useState<Array<number>>([400, 400]);

    useEffect(() => {
        if (window.innerWidth < 1000) {
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
            p={{ y: "1rem" }}
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
            <Grid cols={{ from: 2, how: 1 }} rows={{ from: 2, how: 1 }} className={message} p={{ x: "2.2rem" }}>
                <Subtitle textAlign={"center"}>
                    We <b style={{ fontFamily: "Karla", fontSize: "1.2rem" }}>design</b> and{" "}
                    <b style={{ fontFamily: "Karla", fontSize: "1.2rem" }}>build</b> digital products
                </Subtitle>
            </Grid>
        </Grid>
    );
};

export default MinskyBuild;
