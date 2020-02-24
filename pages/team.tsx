import React, { FunctionComponent } from "react";
import Head from "next/head";

import { useSpring, animated } from "react-spring";

const IndexPage: FunctionComponent = () => {
    const [x, set] = useSpring(() => ({ opacity: 1, from: { opacity: 0 } }));

    return (
        <div>
            <Head>
                <title>Minsky | Our Team</title>
            </Head>
            <div>
                <animated.div style={x}>Opacity example</animated.div>
                <div>
                    <button onClick={() => set({ opacity: 1 })}>Click me</button>
                    <button onClick={() => set({ opacity: 0 })}>Click me too</button>
                </div>
            </div>
        </div>
    );
};

export default IndexPage;
