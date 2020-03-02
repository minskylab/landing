import React from "react";
import { css } from "linaria";

const filtering = css`
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    filter: blur(7px) contrast(7.9);
`;
const GOLPage = () => {
    return (
        <div>
            <div style={{ opacity: "6%" }}>
                <iframe
                    className={filtering}
                    scrolling="no"
                    frameBorder="0"
                    src="https://editor.p5js.org/bregydoc/embed/_CyRT6Wg"
                ></iframe>
            </div>
        </div>
    );
};

export default GOLPage;
