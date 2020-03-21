import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { styled } from "linaria/react";
import axios from "axios";

import { Subtitle, Title } from "../../../components/atoms/Text/v2";
import Head from "next/head";
import { useKeyPress, shuffle } from "../../../general/util";
import { useSpring, animated } from "react-spring";

const INFO_URL = "https://eyetracking.minsky.cc/api/v1/info";
const BASE_IMAGES_URL = "https://public.minsky.cc";

const WrapperGrid = styled.div`
    position: fixed;
    display: grid;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    grid-template-columns: repeat(auto-fill, minmax(200px, 0.5fr));
    grid-template-rows: repeat(5, minmax(251px, 165px));
    grid-gap: 4px;
    background-color: white;
    overflow: hidden;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const EyeTrakingPage: NextPage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [images, setImages] = useState<string[]>([]);
    const [play, setPlay] = useState<boolean>(true);

    const shuffleKey = useKeyPress("s");

    const [propsBanner, set] = useSpring(() => ({ opacity: 1 }));

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

    useEffect(() => {
        set({ opacity: 1 });
        setTimeout(() => {
            set({ opacity: 0 });
        }, 300);
    }, [play]);

    useEffect(() => {
        if (play) {
            const time = Math.round(Math.random() * 4000 + 8000);
            const timer = setTimeout(() => {
                setImages(img => [...shuffle(img)]);
            }, time);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [images, play]);

    useEffect(() => {
        if (shuffleKey) {
            setPlay(!play);
        }
    }, [shuffleKey]);

    if (loading) {
        return (
            <div
                style={{
                    position: "absolute",
                    display: "flex",
                    width: "100vw",
                    height: "100vh",
                    top: 0,
                    left: 0,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Subtitle bold size={"4rem"}>
                    Loading
                </Subtitle>
            </div>
        );
    }

    console.log(images.length);

    return (
        <>
            <Head>
                <title>Eye Tracking Project | Minsky</title>
                <meta
                    name="description"
                    content="Eye Tracking Project was created to help to make a research related to eating disorders"
                />
            </Head>
            <animated.div
                style={{
                    ...propsBanner,
                    position: "absolute",
                    display: "flex",
                    zIndex: 2,
                    bottom: 0,
                    width: "100%",
                    height: "180px",
                    backgroundColor: "#1b1b1baa",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Title color={"white"} size={"3rem"} bold>
                    {play && "PLAY"}
                    {!play && "STOP"}
                </Title>
            </animated.div>
            <WrapperGrid>
                {images.map((image, i) => {
                    return (
                        <div
                            key={i}
                            style={{
                                // display: "flex",
                                width: "100%",
                                height: "100%",
                                // width: size.width / 2,
                                // height: size.height / 2,
                                backgroundImage: `url(${image})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                transition: "0.3s"
                                // backgroundSize: `${size.width / 2}px ${size.height / 2}px`
                            }}
                        />
                    );
                })}
            </WrapperGrid>
        </>
    );
};

export default EyeTrakingPage;
