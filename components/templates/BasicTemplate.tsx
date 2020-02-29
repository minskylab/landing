import React from "react";
import Head from "next/head";

const BasicTemplate = (props: any) => {
    return (
        <>
            <style jsx global>{`
                * {
                    font-size: 16px;
                }

                body {
                    margin: 0;
                    padding: 0;
                    // font-size: 16px;
                    font-weight: 400;
                    line-height: 1.8;
                    color: #333;
                    font-family: sans-serif;
                }
                h1 {
                    font-weight: 700;
                }
                p {
                    margin-bottom: 10px;
                }
            `}</style>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta
                    name="description"
                    content="Minsky is a Peruvian located company with the mision to change the technology reality of Peru"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
            </Head>
            {props.children}
        </>
    );
};

export default BasicTemplate;
