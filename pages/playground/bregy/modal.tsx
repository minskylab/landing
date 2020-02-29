import React, { useState } from "react";
import Head from "next/head";
import Modal from "../../../components/atoms/Modal";
import ModalCard from "../../../components/atoms/Modal/Card";
import { Button } from "../../../components/atoms/Button";

const ModalPage = () => {
    const [modal, setModal] = useState<boolean>(false);

    return (
        <>
            <Head>
                <title> Modal - Showcase | Minsky</title>
            </Head>
            <div>
                <Modal active={modal}>
                    <ModalCard
                        title={"Hello there"}
                        closable
                        onAction={act => {
                            console.log(act);
                            if (act === "close") {
                                setModal(false);
                            }
                        }}
                    >
                        <div>Hello World</div>
                    </ModalCard>
                </Modal>
                <Button primary onClick={() => setModal(true)}>
                    Open Modal
                </Button>
            </div>
        </>
    );
};

export default ModalPage;
