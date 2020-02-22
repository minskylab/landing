import React, { FunctionComponent, useState } from "react";
import { styled } from "linaria/react";
import Head from "next/head";
import Title from "../components/atoms/Text/Title";
import Grid from "../components/atoms/Grid";
import { MinskyLogo } from "../components/atoms/Icon/icons";
import { Button } from "../components/atoms/Button";
import VerticalMenu from "../components/atoms/VerticalMenu";

const items = [
    { key: "home", name: "Home" },
    { key: "services", name: "Our Services" },
    { key: "team", name: "Our Team" },
    { key: "technologies", name: "Our Technologies" }
];

const IndexPage: FunctionComponent = () => {
    const [currentPage, setCurrentPage] = useState<string>("home");

    return (
        <div>
            <Head>
                <title>Minsky | Home</title>
            </Head>
            <Grid
                container
                columnsTemplate={"repeat(3, 1fr)"}
                rowsTemplate={"repeat(6, auto)"}
                alignItems={"start"}
                mx={"1.4em"}
                my={"2.4em"}
            >
                <Grid gridColumn={"1 / span 1"}>
                    <VerticalMenu items={items} selectedItem={currentPage}></VerticalMenu>
                </Grid>
                <Grid gridColumn={"2 / span 1"} justifyContent={"center"} flex>
                    <MinskyLogo />
                </Grid>
                <Grid gridColumn={"3 / span 1"} justifyContent={"flex-end"} flex>
                    <Button primary>Contact Us</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default IndexPage;
