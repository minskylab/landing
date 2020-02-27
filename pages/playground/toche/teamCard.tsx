import React from "react";
import { PersonCard } from "../../../components/molecules/Cards/PersonCard";

const Playground = () => {
    return (
        <PersonCard
            img={"sada"}
            name="string"
            tags={["string[]", "[]ssdasda", "[]asdasdasd"]}
            socialNet={[{ type: "github" }]}
        ></PersonCard>
    );
};

export default Playground;
