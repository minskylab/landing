import React from 'react';


import { TeamCards, TeamProps } from "../../molecules/Cards/teamCard"
import { Grid } from '../../atoms/Grid/v2';
import { Text } from '../../atoms/Text';
import { TextTypes } from '../../atoms/Text/constants';

// name: string,
// img: any,
// email: string,
// tags?: string[],
// socialNet: any[],

const DEBUG = false;
const Team = () => {
    const items: TeamProps[] = [
        {
            img: "as",
            tags: ["Backend", "Frontend", "Catlover"],
            name: "Antonio Toche",
            socialNet: ["asdasd", "asdasda", "asdkdkk"]
        },
        {
            img: "as",
            tags: ["UXIUResearch", "FrontEnd", "DataAnalyst"],
            name: "María Noriega",
            socialNet: ["asdasd", "asdasda", "asdkdkk"]
        },
        {
            img: "as",
            tags: ["Inventor", "Developer", "UXIUResearch"],
            name: "Bregy Malpartida",
            socialNet: ["asdasd", "asdasda", "asdkdkk"]
        },
        {
            img: "as",
            tags: ["Scientist", "Psychologist", "ComputationalLover"],
            name: "Carlos Almenara",
            socialNet: ["asdasd", "asdasda", "asdkdkk"]
        },
    ];

    return (<Grid debug={DEBUG} rowsTemplate={[{ parts: 2 }]} type={"block"}>
        <Grid rows={{ from: 1, how: 1 }} cols={{ from: 1, how: 1 }} type={"block"}>
            <Text alignText="start" type={TextTypes.title}>
                Our Team
        </Text>
        </Grid>
        <Grid
            type={"grid"}
            colsTemplate={[
                { parts: 1, size: "1fr" }, // sm
                { parts: 2, size: "1fr" }, // md
                { parts: 4, size: "1fr" } //  lg
            ]}
            rowsTemplate={{ parts: 1, size: "auto" }}
            gridAutoFlow={"row"}
            columnGap="1em"
            p={{ x: "1em", y: "1em" }}
            debug={DEBUG}
        >
            {items.map(value => {
                return (
                    <TeamCards name={value.name} img={value.img} tags={value.tags} email={value.email} socialNet={value.socialNet}></TeamCards>
                );
            })}
        </Grid>
    </Grid>)

}


export { Team }