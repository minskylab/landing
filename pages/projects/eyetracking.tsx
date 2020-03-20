import React, { FC, useEffect, useState } from "react";
import { NextPage, NextPageContext } from "next";
import { styled } from "linaria/react";
import axios from "axios";

import { Subtitle } from "../../components/atoms/Text/v2";

const INFO_URL = "https://eyetracking.minsky.cc/api/v1/info";
const BASE_IMAGES_URL = "https://public.minsky.cc";

const WrapperGrid = styled.ul`
    display: grid;
    width: 100vw;
    /* height: 100vh; */
    padding: 0;
    margin: 0;
    grid-template-columns: repeat(auto-fill, minmax(200px, 0.5fr));
    grid-template-rows: repeat(20, minmax(251px, 165px));
    grid-gap: 4px;
    background-color: black;
`;

const EyeTrakingPage: NextPage = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get(INFO_URL)
            .then(r => {
                setImages(r.data.images.map((img: string) => `${BASE_IMAGES_URL}/${img}`));
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div>
                <Subtitle p={{ all: "2rem" }}>Loading</Subtitle>
            </div>
        );
    }

    const cols = 4;
    return (
        <WrapperGrid>
            {images.map((image, i) => {
                return (
                    <div
                        key={i}
                        style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            // width: size.width / 2,
                            // height: size.height / 2,
                            backgroundImage: `url(${image})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"

                            // backgroundSize: `${size.width / 2}px ${size.height / 2}px`
                        }}
                    />
                );
            })}
        </WrapperGrid>
    );
};

export default EyeTrakingPage;
