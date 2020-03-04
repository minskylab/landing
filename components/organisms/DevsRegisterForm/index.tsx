import React, { useRef, FC, useState } from "react";
import EnhancedInput from "./input";
import { Form } from "@unform/web";
import { Button } from "../../atoms/Button";
import * as yup from "yup";
import { Simple } from "../../atoms/Text/v2";

export interface Partner {
    name: string;
    email: string;
    role: string;
    personalWork: string;
}

interface DevRegisterFormProps {
    onSubmit?: (record: Partner) => void;
    disable?: boolean;
}

const partner = yup.object().shape({
    name: yup.string().required(),
    email: yup
        .string()
        .email()
        .required(),
    role: yup.string().required(),
    personalWork: yup.string().required()
});

const DevRegisterForm: FC<DevRegisterFormProps> = (props: DevRegisterFormProps) => {
    const formRef = useRef();
    const [errors, setErrors] = useState({});
    const [currentErrorMessage, setCurrentErrorMessage] = useState<string>("");
    const handleSubmit = async (data: Partner, { reset }) => {
        partner
            .validate(data)
            .then((res: yup.Shape<object, Partner>) => {
                setCurrentErrorMessage("");
                props.onSubmit(res);
                reset();
            })
            .catch((err: yup.ValidationError) => {
                const p = err.path;
                let errors = {};
                errors[p] = err.message;
                setCurrentErrorMessage(err.message);
                console.log(errors);
                setErrors(errors);
            })
            .finally(() => {});
    };

    return (
        <Form ref={formRef} onSubmit={handleSubmit}>
            <EnhancedInput
                name={"email"}
                type={"email"}
                label={"Email"}
                placeholder={"youremail@example.com"}
                helperText={"Introduce your email"}
                errorMessage={errors["email"]}
            />

            <EnhancedInput
                name={"name"}
                type={"text"}
                label={"Fullname"}
                placeholder={"Jhon Doe"}
                helperText={"Your firstname and your lastname"}
                errorMessage={errors["name"]}
            />

            <EnhancedInput
                name={"role"}
                type={"text"}
                label={"Role"}
                placeholder={"Developer"}
                helperText={"Your current role (e.g. Developer, Designer, Student...)"}
                errorMessage={errors["role"]}
            />

            <EnhancedInput
                name={"personalWork"}
                type={"text"}
                label={"Personal work"}
                placeholder={"https://github.com/your-account"}
                helperText={"If you have a personal work page, drive, link, any"}
                errorMessage={errors["personalWork"]}
            />

            <div>
                <Simple color={"#ff6445"}>{currentErrorMessage}</Simple>
            </div>
            <div style={{ marginTop: "2rem", marginBottom: "3rem" }}>
                <Button primary type={"submit"} isDisable={props.disable}>
                    Send
                </Button>
            </div>
        </Form>
    );
};

export default DevRegisterForm;
