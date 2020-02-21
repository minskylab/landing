import React from "react";
import {Button} from "../../components/atoms/Buttom/index"

const Playground = () => {
    return (
        <div>
            <Button onClick={()=>console.log("hola")}>HOLA</Button>
        </div>
    );
};

export default Playground;
