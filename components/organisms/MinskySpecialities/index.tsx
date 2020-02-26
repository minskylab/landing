import React from 'react';
import {Grid} from '../../atoms/Grid/v2/index';

import { SpecialtiesCards,SpecialtiesProps  } from "../../molecules/Cards/specialtiesCard"
import { Text } from '../../atoms/Text';
import { TextTypes } from '../../atoms/Text/constants';


const DEBUG = false;
const Specialties = () => {

    const items: SpecialtiesProps[] = [
        {  image: <img src="/images/ideation.png" alt="Software Development" height="48px" width="48px" />,title: "Software Development", topics: ["IT Consulting","DevOps Services","Mobile and Web Apps", "Maintenance and Support", "IA and Machine Learing Development"], iconTopic: "any"}
    ]

    return(
        <Grid debug={DEBUG} rowsTemplate={[{ parts: 2 }]} type={"block"}>
        <Grid rows={{ from: 1, how: 1 }} cols={{ from: 1, how: 1 }} type={"block"}>
            <Text alignText="start" type={TextTypes.title}>
                Our specialties
            </Text>
        </Grid>
        <Grid
            type={"grid"}
            colsTemplate={[
                { parts: 1, size: "1fr" }, // sm
                { parts: 3, size: "1fr" }, // md
                { parts: 3, size: "1fr" } //  lg
            ]}
            rowsTemplate={{ parts: 1, size: "auto" }}
            gridAutoFlow={"row"}
            columnGap="2.8em"
            rowGap="1em"
            p={{ x: "2em", y: "2em" }}
            debug={DEBUG}
        >
            {items.map(value => {
                return <SpecialtiesCards body={value.body} icon={value.icon} title={value.title}></SpecialtiesCards>;
            })}
        </Grid>
    </Grid>
    )
}