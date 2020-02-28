import React, { FC } from "react";
import { css } from "linaria";
import { Blob2, Blob1, Blob3, Blob4 } from "../Icon/icons";

const blob1 = css`
    position: absolute;
    animation: rotate 2.015s linear infinite;
    @keyframes rotate {
        from {
            transform: rotateZ(360deg);
        }
        to {
            transform: rotateZ(0deg);
        }
    }
`;

const blob2 = css`
    position: absolute;
    animation: rotate 4s ease-in-out infinite;
    @keyframes rotate {
        from {
            transform: rotateZ(0deg);
        }
        to {
            transform: rotateZ(360deg);
        }
    }
`;

const blob3 = css`
    position: absolute;
    animation: rotate 2.2s ease-in infinite;
    @keyframes rotate {
        from {
            transform: rotateZ(360deg);
        }
        to {
            transform: rotateZ(0deg);
        }
    }
`;

const blob4 = css`
    position: absolute;
    animation: rotate 3.25s ease-out infinite;
    @keyframes rotate {
        from {
            transform: rotateZ(0deg);
        }
        to {
            transform: rotateZ(360deg);
        }
    }
`;

interface BlobBackgroundProps {
    width?: number;
    height?: number;
}

const BlobBackground: FC<BlobBackgroundProps> = (props: BlobBackgroundProps) => {
    return (
        <div
            style={{
                position: "relative",
                height: `${props.height || 400}px`,
                width: `fit-content`,
                display: "flex",
                transform: `translateX(-${props.height / 2}px)`
            }}
        >
            <div className={blob1}>
                <Blob2 width={props.width || 400} height={props.height || 400}></Blob2>
            </div>
            <div className={blob2}>
                <Blob1 width={props.width || 400} height={props.height || 400}></Blob1>
            </div>
            <div className={blob3}>
                <Blob3 width={props.width || 400} height={props.height || 400}></Blob3>
            </div>
            <div className={blob4}>
                <Blob4 width={props.width || 400} height={props.height || 400}></Blob4>
            </div>
        </div>
    );
};

export default BlobBackground;
