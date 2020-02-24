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
            debug={true}
            type={"grid"}
            columnsTemplate={[
                { parts: 5 }, // sm
            ]}
            gridAutoFlow={"row"}
            rowsTemplate={{parts: 2}}
        >
            <Grid debug={true}
                type={"flex"}
                columnsTemplate ={[
                    {parts: 3}
                ]}

            >
                <div style={{ width:" 100%", height:"100px"}}>asdasda</div>
                <div style={{ width:" 100%", height:"100px", display:"flex",alignItems:"center"}}>asdasda</div>
                <div style={{ width:" 100%", height:"100px", display: "flex", alignItems:"flex-end"}}>asdas</div>
            </Grid>
            <div style={{ width:" 100%", height:"100px"}}></div>
            <div style={{ width:" 100%", height:"100px"}}></div>
            <div style={{ width:" 100%", height:"100px"}}></div>
            <div style={{ width:" 100%", height:"100px"}}></div>
            <div style={{ width:" 100%", height:"100px"}}></div>
            <div style={{ width:" 100%", height:"100px"}}></div>
            <div style={{ width:" 100%", height:"100px"}}></div>
            <div style={{ width:" 100%", height:"100px"}}></div>
            <div style={{ width:" 100%", height:"100px"}}></div>
        </Grid>
    );
};

export default Playground;
