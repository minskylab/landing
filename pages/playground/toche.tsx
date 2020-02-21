import React from "react";
import { Button } from "../../components/atoms/Button/index";

const Playground = () => {
    return (
        <div>
            <Button onClick={() => console.log("hola")}>HOLA</Button>
        </div>
    );
};

export default Playground;
