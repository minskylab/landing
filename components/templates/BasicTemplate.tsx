import React from "react";

const BasicTemplate = (props: any) => {
    return (
        <>
            {props.children}
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    font-size: 16px;
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
        </>
    );
};

export default BasicTemplate;
