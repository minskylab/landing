import React from "react";
import { Card } from "../../../components/molecules/cards/card";

import { Grid } from "../../../components/atoms/Grid/v2";


const items = [
    { as: "p", value: "Home" },
    { as: "p", value: "Our Services" },
    { as: "h3", value: "Our Team" },
    { as: "h3", value: "Our Technologies" }
];

const Playground = () => {


    
    return (
        <Grid
            type={"grid"}
            columnsTemplate={[
                { parts: 4, size: "1fr" }, // sm
            ]}
            gridAutoFlow={"row"}
            rowsTemplate={{ parts: 1, size: "1fr" }}
        >
            
            <Card  icon={"asa"} body={"asdasdadasdsdasdsadasd"} title="asdasdsa" mobile></Card>
            <Card icon={"asa"} body={"asdasdadasdsdasdsadasd"} title="asdasdsa" mobile></Card>
            <Card  icon={"asa"} body={"asdasdadasdsdasdsadasd"} title="asdasdsa" mobile></Card>
        </Grid>
    );
};

export default Playground;
