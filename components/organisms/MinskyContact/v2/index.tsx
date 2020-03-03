import React, { FC, useState, useRef } from "react";
import Grid from "../../../atoms/Grid/v2";
import { Title, Subtitle, Important, Body, Subtitle2, Simple } from "../../../atoms/Text/v2";
import { styled } from "linaria/react";
import * as yup from "yup";
import { Button } from "../../../atoms/Button";
import EnhancedInput from "./input";
import { Form } from "@unform/web";
import axios from "axios";
import NextI18NextInstance from "../../../../general/i18n";

const suscriber = yup.object().shape({
    email: yup
        .string()
        .email()
        .required()
});

const BulbImage = styled.div`
    background-image: url("/images/uplightbulb.png");
    width: 20rem;
    height: 30rem;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
`;

interface MinskyContentProps {
    onLoading?: (state: boolean) => void;
}

const MinskyContact: FC<MinskyContentProps> = (props: MinskyContentProps) => {
    const formRef = useRef();
    const [t, i18n] = NextI18NextInstance.useTranslation();

    const registerNewPartner = async (email: string) => {
        console.log("registering", email);
        props.onLoading && props.onLoading(true);
        const res = await axios.post("https://content.minsky.cc/potential-users", {
            email: email
        });
        if (res.status != 200) {
            throw "user already registered";
        }
        props.onLoading && props.onLoading(false);
    };

    const handleSubmit = async (data: any, { reset }) => {
        suscriber
            .isValid(data)
            .then(async (isValid: boolean) => {
                if (isValid) {
                    try {
                        //@ts-ignore
                        formRef.current.setErrors({});
                        await registerNewPartner(data.email);
                        reset();
                    } catch (e) {
                        console.log(e);
                        reset();
                    }
                } else {
                    try {
                        //@ts-ignore
                        formRef.current.setErrors({
                            email: "invalid email, please introduce another"
                        });
                    } catch (e) {
                        console.log(e);
                    }
                }
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <Grid
            type={"grid"}
            rowsTemplate={[
                { parts: 3, size: "auto" },
                { parts: 3, size: "auto" }
            ]}
            colsTemplate={[{}, { parts: 2, size: "auto" }]}
            p={[{ y: "2rem" }, { x: "4rem", y: "3.8rem" }]}
            rowGap={["2rem", ""]}
        >
            <Grid rows={{ from: 1, how: 1 }} cols={{ from: 1, how: 1 }}>
                <Subtitle bold>{t("contact_us_title")}</Subtitle>
                <Body>{t("contact_us_offer")}</Body>
            </Grid>
            <Grid rows={{ from: 2, how: 1 }} cols={{ from: 1, how: 1 }}>
                <Simple bold>{t("email_contact")}</Simple>
                <Important color={"#424242"}>hello@minsky.cc</Important>
                <div style={{ width: "100%", height: "1rem" }} /> {/* spacer */}
                <Simple bold>
                    {t("phone_contact")} | {t("telegram_contact")} | {t("whatsapp_contact")}
                </Simple>
                <Important color={"#424242"}>+51 924 122 969</Important>
            </Grid>
            <Grid rows={{ from: 3, how: 1 }} cols={{ from: 1, how: 1 }} p={[{}, { right: "12rem" }]}>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <EnhancedInput
                        name={"email"}
                        type={"email"}
                        label={"Email"}
                        placeholder={"youremail@example.com"}
                        helperText={t("email_input_help_text")}
                    />
                    <div style={{ marginTop: "1rem" }}>
                        <Button primary type={"submit"}>
                            {t("stay_tuned_action_call")}
                        </Button>
                    </div>
                </Form>
            </Grid>
            <Grid
                type={["none", "flex"]}
                rows={{ from: 1, how: 3 }}
                cols={{ from: 2, how: 1 }}
                justifyContent={"flex-end"}
            >
                <BulbImage />
            </Grid>
        </Grid>
    );
};

export default MinskyContact;
