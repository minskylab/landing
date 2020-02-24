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
        <div>
            
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
            <Grid debug={true}
                type={"flex"}
                columnsTemplate ={[
                    {parts: 3}
                ]}
                
                >
                <div style={{ width:" 100%", height:"100px",display:"flex",justifyContent:"center"}}>asdasda</div>
                <div style={{ width:" 100%", height:"100px", display:"flex",alignItems:"center"}}>asdasda</div>
                <div style={{ width:" 100%", height:"100px", display: "flex", alignItems:"flex-end"}}>asdas</div>
            </Grid>
            <Grid rows={{ from: 2, how: 1 }} cols={{ from: 2, how: 1 }}>

            </Grid>
            <div style={{ width:" 100%", height:"100px"}}></div>
            <div style={{ width:" 100%", height:"100px"}}></div>
            <div style={{ width:" 100%", height:"100px"}}></div>
            <div style={{ width:" 100%", height:"100px"}}></div>
            <div style={{ width:" 100%", height:"100px"}}></div>
            <div style={{ width:" 100%", height:"100px"}}></div>
        </Grid>
        <Grid debug={true}rows={{ from: 6, how: 3 }} cols={{ from: 6, how: 3 }}>
        <Grid
                        debug={true}
                        m={[{ all: "25vh 0.5em 0 0.5em" }, { all: "16em 4.2em 0 4.2em" }, { all: "10em 2em 0 2em" }, {all: "10em 2em 0 2em"}]}
                    >
                          <div style={{ width:" 100%", height:"100px"}}></div>
            <div style={{ width:" 100%", height:"100px"}}></div>
            <div style={{ width:" 100%", height:"100px"}}></div>
            <div style={{ width:" 100%", height:"100px"}}></div>
            <div style={{ width:" 100%", height:"100px"}}></div>
            <div style={{ width:" 100%", height:"100px"}}></div>
            <div style={{ width:" 100%", height:"100px"}}></div>
                    </Grid>
          
        </Grid>
        </div>
    );
};

export default Playground;
