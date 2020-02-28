import React from "react";

const BasicTemplate = (props: any) => {
    return (
        <>
            <style jsx global>{`
                * {
                    font-size: 16px;
                }

                @media only screen and (max-width: 1180px) {
                    * {
                        font-size: 14px;
                    }
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
            {props.children}
        </>
    );
};

export default BasicTemplate;
