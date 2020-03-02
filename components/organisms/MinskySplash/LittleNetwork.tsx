import React, { FC, useState } from "react";
import { Simple } from "../../atoms/Text/v2";
import LinkedInOutline from "../../atoms/Icon/LinkedInOutline";
import GithubOutline from "../../atoms/Icon/GithubOutline";
import TwitterOutline from "../../atoms/Icon/TwitterOutline";

export interface SocialNetwork {
    kind: "linkedin" | "github" | "twitter";
    link: string;
    title?: string;
}

interface LittleNetworkProps {
    value: SocialNetwork;
}

const LittleNetwork: FC<LittleNetworkProps> = (props: LittleNetworkProps) => {
    const [focus, setFocus] = useState<boolean>(false);
    return (
        <div
            onClick={() => open(props.value.link)}
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
                {props.value.kind === "linkedin" && <LinkedInOutline height={32} width={32} color={"#1b1b1b"} />}
                {props.value.kind === "github" && <GithubOutline height={32} width={32} color={"#1b1b1b"} />}
                {props.value.kind === "twitter" && <TwitterOutline height={32} width={32} color={"#1b1b1b"} />}
            </div>
            <div
                style={{
                    backgroundColor: focus ? "#ffdf53" : "transparent",
                    transition: "background-color 0.1s"
                }}
            >
                <Simple size={"0.6rem"} textAlign={"center"}>
                    {props.value.title || props.value.kind}
                </Simple>
            </div>
        </div>
    );
};

export default LittleNetwork;
