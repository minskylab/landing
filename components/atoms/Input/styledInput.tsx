import React from "react";

import { styled } from "linaria/react";

export const StyledInput = styled.input`
    background-color: #fff9df;
    font-size: 1rem;
    border: 0.5px solid #fff9df;
    border-radius: 8px;
    padding: 0.75rem 0.9rem;
    font-family: "Karla", sans-serif;
    color: #1b1b1b;
    transition: 0.3s;

    ::placeholder {
        color: #a3a3a3;
    }

    :focus {
        outline: none;
        background-color: #ffe87a;
        ::placeholder {
            color: #8a8a8a;
        }
    }

    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;
