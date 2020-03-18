import React, { FC } from "react";
import { NextPage } from "next";
import { images } from "../../general/diets";
import { styled } from "linaria/react";

const Wrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-gap: 10px;
    grid-auto-flow: dense;
    list-style: none;
    margin: 1em auto;
    padding: 0;
    max-width: 80vw;
`;

const EyeTrakingPage: FC<NextPage> = (props: NextPage) => {
    return (
        <Wrapper>
            {images.map(image => {
                return (
                    <li>
                        <img
                            {...{
                                ...image,
                                style: { display: "block", objectFit: "cover", width: "100%", height: "100%" }
                            }}
                        />
                    </li>
                );
            })}
        </Wrapper>
    );
};

export default EyeTrakingPage;
