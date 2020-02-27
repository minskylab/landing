import React from "react";
import { PersonCard } from "../../../components/molecules/Cards/personCard";

const Playground = () => {
    return (
        <PersonCard
            img={"sada"}
            name="string"
            tags={["string[]", "[]ssdasda", "[]asdasdasd"]}
            socialNet={["any,", "any,", "any,"]}
        ></PersonCard>
    );
};

export default Playground;
