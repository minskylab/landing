import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import * as animationData from "./menu-button.json";

const OpenMenuIcon = () => {
    const [stopped, setStopped] = useState<boolean>(false);
    const [paused, setPaused] = useState<boolean>(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    useEffect(() => {
        console.log(stopped, paused);
    }, [stopped, paused]);

    return (
        <div>
            <Lottie options={defaultOptions} height={400} width={400} isStopped={stopped} isPaused={paused} />
            <button onClick={() => setStopped(true)}>stop</button>
            <button onClick={() => setStopped(false)}>play</button>
            <button onClick={() => setPaused(!paused)}>pause</button>
        </div>
    );
};

export default OpenMenuIcon;
