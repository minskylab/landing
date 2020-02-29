import React, { useEffect, useRef, FC } from "react";
import { useField } from "@unform/core";
import Input, { InputProps } from "../../../atoms/Input";

const EnhancedInput: FC<InputProps> = (props: InputProps) => {
    const inputRef = useRef(null);
    const { fieldName, defaultValue = "", registerField, error } = useField(props.name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value"
        });
    }, [fieldName, registerField]);

    return <Input ref={inputRef} defaultValue={defaultValue} errorMessage={error} {...props} />;
};

export default EnhancedInput;
