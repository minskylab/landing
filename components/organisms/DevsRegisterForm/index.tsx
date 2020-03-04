import React, { useRef, FC } from "react";
import EnhancedInput from "./input";
import { Form } from "@unform/web";
import { Button } from "../../atoms/Button";

const DevRegisterForm: FC = () => {
    const formRef = useRef();

    const handleSubmit = async (data: any, { reset }) => {
        console.log(data);
        reset();
    };

    return (
        <div>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <EnhancedInput
                    name={"email"}
                    type={"email"}
                    label={"Email"}
                    placeholder={"youremail@example.com"}
                    helperText={"Introduce your email"}
                />

                <EnhancedInput
                    name={"name"}
                    type={"text"}
                    label={"Fullname"}
                    placeholder={"Jhon Doe"}
                    helperText={"Your firstname and your lastname"}
                />

                <EnhancedInput
                    name={"role"}
                    type={"text"}
                    label={"Role"}
                    placeholder={"Developer"}
                    helperText={"Your current role (e.g. Developer, Designer, Student...)"}
                />

                <EnhancedInput
                    name={"personal_work"}
                    type={"text"}
                    label={"Personal work"}
                    placeholder={"https://github.com/your-account"}
                    helperText={"If you have a personal work page, drive, link, any"}
                />

                <div style={{ marginTop: "2rem", marginBottom: "3rem" }}>
                    <Button primary type={"submit"}>
                        Send
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default DevRegisterForm;
