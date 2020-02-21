import React from "react";
import {Button} from "../../components/atoms/Buttom/index"


const Playground = () => {
    return (
        <div>
            <div>
                <Button onClick={()=>console.log("Button")}>Button</Button>
                <Button onClick={()=>console.log("Button")} primary>Button</Button>
                <Button onClick={()=>console.log("Button")} secondary>Button</Button>
                <Button onClick={()=>console.log("Button")} minsky>Button</Button>
                <Button onClick={()=>console.log("Button")} inverse>Button</Button>
            </div>
            <div>
                <Button onClick={() => console.log("Button")} big> Button </Button>
                <Button onClick={() => console.log("Button")} normal> Button </Button>
                <Button onClick={() => console.log("Button")} compact> Button </Button>
            </div>
            <div>
                <Button onClick={() => console.log("Button")} isDisable> Button </Button>
                <Button onClick={() => console.log("Button")} isSelect> Button </Button>
            </div>

            <div>
                <Button onClick={()=>console.log("Button")} primary big isDisable>Button</Button>
                <Button onClick={()=>console.log("Button")} secondary big isSelect>Button</Button>
                <Button onClick={()=>console.log("Button")} minsky big>Button</Button>
                <Button onClick={()=>console.log("Button")} inverse big>Button</Button>
            </div>
        </div>
    );
};

export default Playground;
