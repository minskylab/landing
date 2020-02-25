import React from "react";

import { Grid } from "../../../components/atoms/Grid/v2";

const items = [
    { as: "p", value: "Home" },
    { as: "p", value: "Our Services" },
    { as: "h3", value: "Our Team" },
    { as: "h3", value: "Our Technologies" }
];

const Playground = () => {
    return (
            <Grid type="grid" rowsTemplate={[{parts:2},{parts:1}]} colsTemplate={[{parts:1},{parts:1}]}>
                <Grid type="flex" rows={{from:1,how:1}} cols={{from:1,how:1}}>
                    <div style={{ width: " 100%", height: "100px" }}></div>
                </Grid>
                <Grid type="flex" rows={{from:2,how:1}} cols={{from:1,how:1}}>
                    <div style={{ width: " 100%", height: "100px" }}></div>
                </Grid>
                <Grid type="flex" rows={{from:2,how:1}} cols={{from:2,how:1}}>
                    <div style={{ width: " 100%", height: "100px" }}></div>
                </Grid>

            </Grid>
    );
};

export default Playground;
//<div style={{ width: " 100%", height: "100px" }}></div>