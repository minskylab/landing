import React from 'react';
import { Grid } from '../../atoms/Grid/v2';



const SpecialtiesCards = () => {

    return (
        <Grid rowsTemplate={{parts:4,size:"auto"}} type="grid" colsTemplate={{parts:1}}> 
            <Grid rows={{from:1,how:1}}></Grid>
            <Grid rows={{from:2,how:1}}></Grid>
            <Grid rows={{from:3,how:1}}></Grid>
            <Grid rows={{from:4,how:2}}></Grid>

        </Grid>
    )
}


export {SpecialtiesCards};