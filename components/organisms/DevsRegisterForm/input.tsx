import React, { useEffect, useRef, ReactElement, createRef } from "react";
import { useField } from "@unform/core";
import Input, { InputProps } from "../../atoms/Input";

function EnhancedInput(props: InputProps): ReactElement {
    const inputRef = createRef();

    const { fieldName, defaultValue = "", registerField, error } = useField(props.name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value"
        });
    }, [fieldName, registerField]);

    return <Input {...props} forwardedRef={inputRef} defaultValue={defaultValue} errorMessage={error} />;
}

export default EnhancedInput;
