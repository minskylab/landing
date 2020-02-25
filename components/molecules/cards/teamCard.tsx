import React,{FC} from 'react';
import {Grid} from '../../atoms/Grid/v2/index';


interface TeamProps{
    name: string,
    img: any,
    body: string,
    other?:string,
    socialNet: string[],
}


const ScpecialtiesCard: FC<TeamProps> = (props: TeamProps) =>{

    return (
        <Grid rowsTemplate={{parts:4}} colsTemplate={{parts:1}} type="grid">
            <Grid rows={{from:1}}>
            
            </Grid>
            <Grid rows={{from:2}}></Grid>
            <Grid rows={{from:3}}></Grid>
            <Grid rows={{from:4}}></Grid>
        </Grid>
    )
}