import React from "react";
import { LinkedIn } from "../../atoms/Icon";
import Github from "../../atoms/Icon/Github";
import Twitter from "../../atoms/Icon/Twitter";
import ColorTypes from "../../atoms/Colors";

const Networks = () => {
    return (
        <div>
            {["Linkedin", "Github", "Twitter"].map((socialNet, i) => (
                <div key={i}>
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
                        {socialNet === "Linkedin" && <LinkedIn height={32} width={32} color={ColorTypes.black._50} />}
                        {socialNet === "Github" && <Github height={32} width={32} color={ColorTypes.black._50} />}
                        {socialNet === "Twitter" && <Twitter height={32} width={32} color={ColorTypes.black._50} />}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Networks;
