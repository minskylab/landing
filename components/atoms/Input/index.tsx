import React, { FunctionComponent, useState, useEffect } from "react";
import { styled } from "linaria/react";
import { InputMode } from "./types";
import { InputType } from "zlib";
import { StyledInput } from "./styledInput";

interface LabelProps {
    focus?: boolean;
}

const Label = styled.label<LabelProps>`
    font-size: 0.75rem;
    transition: 0.3s;
    color: ${props => (props.focus ? "#1b1b1b" : "#454545")};
    margin-bottom: 0.1rem;
    /* margin-left: 8px; */
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

const InputCompleteScaffold = styled.div`
    /* display: inline; */
    /* width: 100%; */
`;

const TrailingIcon = styled.div`
    position: relative;
    top: 0;
    right: 0;
    width: 1rem;
    height: 1rem;
    background-color: #1b1b1b;
`;

interface InputProps {
    value: any;
    onChange: (value: string) => void;
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
}

const Input: FunctionComponent<InputProps> = props => {
    const [focus, setFocus] = useState<boolean>(false);

    useEffect(() => {
        props.onFocusChange && props.onFocusChange(focus);
    }, [focus]);

    return (
        <InputWrapper>
            {props.label ? <Label focus={focus}> {props.label} </Label> : null}
            <StyledInput
                type={props.type as string}
                name={props.name}
                inputMode={props.inputMode}
                placeholder={props.placeholder}
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
            {/* <TrailingIcon /> */}
            {props.errorMessage && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
            {!props.errorMessage && props.helperText && <HelpMessage>{props.helperText}</HelpMessage>}
        </InputWrapper>
    );
};

export default Input;
