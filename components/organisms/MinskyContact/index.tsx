import React, { FC } from "react";
import Grid from "../../atoms/Grid/v2";
import { Text } from "../../atoms/Text";
import { TextTypes } from "../../atoms/Text/constants";

import { styled } from "linaria/react";
//import { Input } from '../../atoms/Form/input';

const Wrapper = styled.div`
    border-radius: 0.6em;
    transition: 0.2s ease-in-out;
    &:hover {
        transform: translateY(-5px);
        -webkit-box-shadow: 0.895385px 3.58154px 13.4308px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0.895385px 3.58154px 13.4308px rgba(0, 0, 0, 0.1);
        box-shadow: 0.895385px 3.58154px 13.4308px rgba(0, 0, 0, 0.1);
    }
`;

export const ContactUs: FC = () => {
    const Title: string = "Contact Us";
    const Subtitle: string = "Or come and drink coffee in comfy place";
    const Addres: string = "514 S. Magnolia St. ";
    const Par2: string = "Miraflores, FL 32806";
    const Country: string = "Lima";
    const Mail: string = "hello@minsky.cc";
    const Telf: string = "+51 961 818 237";
    const Caption: string = "Stay Tuned";
    return (
        <Wrapper>
            <Grid
                type="grid"
                rowsTemplate={{ parts: 5, size: "1fr" }}
                colsTemplate={{ parts: 3, size: "auto" }}
                p={{ all: "2em" }}
            >
                <Grid type="flex" rows={{ from: 1, how: 1 }} cols={{ from: 1, how: 2 }} alignItems="center">
                    <Text type={TextTypes.h2}> {Title} </Text>
                </Grid>
                <Grid type="flex" rows={{ from: 2, how: 1 }} cols={{ from: 1, how: 2 }}>
                    <Text type={TextTypes.h2}> {Subtitle} </Text>
                </Grid>
                <Grid type="block" rows={{ from: 3, how: 1 }} cols={{ from: 1, how: 1 }}>
                    <Text type={TextTypes.simple}> {Addres} </Text>
                    <div>
                        <Text type={TextTypes.simple}> {Par2} </Text>{" "}
                    </div>
                    <div>
                        <Text type={TextTypes.simple}> {Country} </Text>{" "}
                    </div>
                </Grid>
                <Grid type="block" rows={{ from: 3, how: 1 }} cols={{ from: 2, how: 1 }} justifySelf="center">
                    <Text type={TextTypes.simple}> {Mail} </Text>
                    <div>
                        <Text type={TextTypes.simple}> {Telf} </Text>{" "}
                    </div>
                </Grid>
                <Grid type="block" rows={{ from: 4, how: 1 }} cols={{ from: 1, how: 2 }} alignSelf="end">
                    <Text type={TextTypes.simple}> {Caption} </Text>
                </Grid>
                <Grid type="flex" rows={{ from: 5, how: 1 }} cols={{ from: 1, how: 2 }}>
                    {/* <Input big></Input> */}
                </Grid>
                <Grid type="block" rows={{ from: 1, how: 5 }} cols={{ from: 3, how: 1 }} justifySelf="start">
                    <img src="/images/uplightbulb.png" width="210px" height="420px" alt="Contact us!" />
                </Grid>
            </Grid>
        </Wrapper>
    );
};
