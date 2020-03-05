import React, { FC, useState } from "react";
import LinkedInOutline from "../../atoms/Icon/LinkedInOutline";
import GithubOutline from "../../atoms/Icon/GithubOutline";
import TwitterOutline from "../../atoms/Icon/TwitterOutline";

import SocialNetworkProps from "./PersonCard";

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
            </div>
        </div>
    );
};

export {SocialNetwork};
