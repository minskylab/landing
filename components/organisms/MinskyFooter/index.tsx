import React from 'react';
import Grid from '../../atoms/Grid/v2';
import { Text } from '../../atoms/Text';
import { TextTypes } from '../../atoms/Text/constants';
import {MinskyLogoIcon } from "../../atoms/Icon/icons";
import Title from "../../atoms/Text/Title"
import Body from '../../atoms/Text/Body';
import { LinkedIn } from "../../../components/atoms/Icon";
import ColorTypes from "../../../components/atoms/Colors";
import Github from "../../../components/atoms/Icon/Github";
import Twitter from "../../../components/atoms/Icon/Twitter";
import { url } from 'inspector';

export const Footer = () => {
    return (

        <Grid rowsTemplate={{parts:7,size:"auto"}} type="grid" colsTemplate={{parts:4,size:"auto"}} justifyContent="end" rowGap="1em" columnGap="5em">
            <Grid rows={{from:1,how:1}} cols={{from:1,how:1}} type="flex">
                <Title alignText={"center"}> <MinskyLogoIcon/> MINSKY </Title>
            </Grid>
            <Grid rows={{from:1,how:1}} cols={{from:2,how:1}} type="flex">
                <Text type={TextTypes.body} style={{fontWeight:"bold"}}> {"About us"} </Text>
            </Grid>
            <Grid rows={{from:2,how:1}} cols={{from:2,how:1}} type="flex">
                 <Text type={TextTypes.simple} > {"Home"} </Text>
            </Grid>
            <Grid rows={{from:3,how:1}} cols={{from:2,how:1}} type="flex">
                <Text type={TextTypes.simple}  style={{textDecoration:"line-through"}}> {"Our History"} </Text>
            </Grid>
            <Grid rows={{from:4,how:1}} cols={{from:2,how:1}} type="flex">
                <Text type={TextTypes.simple} style={{textDecoration:"line-through"}}> {"Our products"} </Text>
            </Grid>
            <Grid rows={{from:5,how:1}} cols={{from:2,how:1}} type="flex">
                <Text type={TextTypes.simple} > {"Jobs"} </Text>
            </Grid>
            <Grid rows={{from:1,how:1}} cols={{from:3,how:1}} type="flex">
                <Text type={TextTypes.body} style={{fontWeight:"bold"}}> {"Resourses"} </Text>
            </Grid>
            <Grid rows={{from:2,how:1}} cols={{from:3,how:1}} type="flex">
                <Text type={TextTypes.simple} style={{textDecoration:"line-through"}}> {"Faq"} </Text>
            </Grid>
            <Grid rows={{from:3,how:1}} cols={{from:3,how:1}} type="flex">
                <Text type={TextTypes.simple} style={{textDecoration:"line-through"}}> {"Blog"} </Text>
            </Grid>
            <Grid rows={{from:4,how:1}} cols={{from:3,how:1}} type="flex">
                <Text type={TextTypes.simple} style={{textDecoration:"line-through"}}> {"Video tutorials"} </Text>
            </Grid>
            <Grid rows={{from:5,how:1}} cols={{from:3,how:1}} type="flex">
                <Text type={TextTypes.simple} > {"Developers"} </Text>
            </Grid>
            <Grid rows={{from:1,how:1}} cols={{from:4,how:1}} type="flex">
                <Text type={TextTypes.body} style={{fontWeight:"bold"}}> {"Usefull information"} </Text>
            </Grid>
            <Grid rows={{from:2,how:1}} cols={{from:4,how:1}} type="flex">
                <Text type={TextTypes.simple} style={{textDecoration:"line-through"}} > {"Terms and conditions"} </Text>
            </Grid>
            <Grid rows={{from:3,how:1}} cols={{from:4,how:1}} type="flex">
                <Text type={TextTypes.simple} style={{textDecoration:"line-through"}}> {"Privacy policy"} </Text>
            </Grid>
            <Grid rows={{from:4,how:1}} cols={{from:4,how:1}} type="flex">
                <Text type={TextTypes.simple} style={{textDecoration:"line-through"}}> {"Get in Touch"} </Text>
            </Grid>
            <Grid rows={{from:5,how:1}} cols={{from:4,how:1}} type="flex">
                <Text type={TextTypes.simple} style={{textDecoration:"line-through"}}> {"Help"} </Text>
            </Grid>
            <Grid rows={{from:6,how:1}} cols={{from:1,how:1}} type="flex">
                <Body>{"Minsky 2020"} </Body>
            </Grid>
            <Grid rows={{from:7,how:1}} cols={{from:1,how:1}} type="flex">
                <Text type={TextTypes.simple} > {"Made in    Perú    with love"} </Text>
            </Grid>

            <Grid rows={{from:7,how:1}} cols={{from:3,how:4}} type="flex" justifySelf="center" >
  
							{[ "Linkedin", "Github", "Twitter" ].map((socialNet, i) => (
								<div key={i}>
									<div
										style={{
											width: "32px",
											height: "32px",
											display: "flex",
											marginLeft: "2em",
											justifyContent: "center",
											alignItems: "center"
										}}
									>
										{socialNet === "Linkedin" && <LinkedIn height={32} width={32} color={ColorTypes.black._50} />}
										{socialNet === "Github" && <Github height={32} width={32} color={ColorTypes.black._50} />}
										{socialNet === "Twitter" && <Twitter height={32} width={32} color={ColorTypes.black._50} />}
									</div>
									{/* <Simple alignText={"center"}>{socialNet}</Simple> */}
								</div>
							))}
						</Grid>

        </Grid>

    )
}
