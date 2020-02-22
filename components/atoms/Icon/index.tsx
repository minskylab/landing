import React, { FC } from "react";

interface IconProps {
    svg: SVGElement;
}

const Icon: FC<IconProps> = (props: IconProps) => {
    // return props.svg
    return <div>{props.svg}</div>;
};

export { Icon };
