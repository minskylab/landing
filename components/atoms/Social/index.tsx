import React, { FC, useState } from "react";
import LinkedInOutline from "../Icon/LinkedInOutline";
import GithubOutline from "../Icon/GithubOutline";
import TwitterOutline from "../Icon/TwitterOutline";

import TinderOutline from "../Icon/TinderOutline";
import HomeOutline from "../Icon/HomeOutline";

export interface SocialNetworkProps {
    type: "github" | "linkedin" | "twitter" | "personal" | "researchgate" | "homepage" | "tinder";
    link?: string;
}

const SocialNetwork: FC<SocialNetworkProps> = (props: SocialNetworkProps) => {
    const [focus, setFocus] = useState<boolean>(false);
    return (
        <div
            onClick={() => open(props.link)}
            onMouseEnter={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
            style={{
                cursor: focus ? "pointer" : "default"
            }}
        >
            <div
                style={{
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    margin: "auto",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {props.type === "linkedin" && <LinkedInOutline height={24} width={24} color={"#1b1b1b"} />}
                {props.type === "github" && <GithubOutline height={24} width={24} color={"#1b1b1b"} />}
                {props.type === "twitter" && <TwitterOutline height={24} width={24} color={"#1b1b1b"} />}
                {props.type === "tinder" && <TinderOutline height={24} width={24} color={"#1b1b1b"} />}
                {props.type === "homepage" && <HomeOutline height={24} width={24} color={"#1b1b1b"} />}
            </div>
        </div>
    );
};

export default SocialNetwork;
