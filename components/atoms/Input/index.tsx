import React, { useState, useEffect, ReactElement } from "react";
import { styled } from "linaria/react";
import { css } from "linaria";
import { InputMode } from "./types";
import { InputType } from "zlib";

const inputStyle = css`
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
`;

interface LabelProps {
    focus?: boolean;
}

const Label = styled.label<LabelProps>`
    font-size: 0.75rem;
    transition: 0.3s;
    color: ${props => (props.focus ? "#1b1b1b" : "#454545")};
    margin-bottom: 0.1rem;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-flow: column;
    font-family: "Karla", sans-serif;
    padding: 0.2rem 0;
    height: calc(3rem + 2rem + 0.5rem);
`;

const ErrorMessage = styled.div`
    font-size: 0.75rem;
    transition: 0.3s;
    color: #ff6445;
    margin-bottom: 0.1rem;
`;

const HelpMessage = styled.div`
    font-size: 0.75rem;
    transition: 0.3s;
    color: #8f8f8f;
    margin-bottom: 0.1rem;
`;

export interface InputProps {
    value?: string | number | string[];
    onChange?: React.ChangeEventHandler;
    onFocusChange?: (focus: boolean) => void;
    type?: InputType;
    name?: string;
    inputMode?: InputMode;
    placeholder?: string;
    label?: string;
    helperText?: string;
    errorMessage?: string;

    prefix?: string;
    suffix?: string;

    forwardedRef?: any;
    defaultValue?: string | number | string[];
}

function Input(props: InputProps): ReactElement {
    const [focus, setFocus] = useState<boolean>(false);

    useEffect(() => {
        props.onFocusChange && props.onFocusChange(focus);
    }, [focus]);

    return (
        <InputWrapper>
            {props.label ? <Label focus={focus}> {props.label} </Label> : null}
            <input
                ref={props.forwardedRef}
                className={inputStyle}
                defaultValue={props.defaultValue}
                type={props.type as string}
                name={props.name}
                inputMode={props.inputMode}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
            {props.errorMessage && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
            {!props.errorMessage && props.helperText && <HelpMessage>{props.helperText}</HelpMessage>}
        </InputWrapper>
    );
}

export default Input;
