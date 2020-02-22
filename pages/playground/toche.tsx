import React from "react";
import { Button } from "../../components/atoms/Button/index"
import { Input } from "../../components/atoms/Form/input"
import { CheckBox } from "../../components/atoms/Form/checkbox"
import {Switch}from "../../components/atoms/Form/switch"
const Playground = () => {
    return (
        <div>
            <div>
                <div>
                    <Button onClick={() => console.log("Button")}>Button</Button>
                    <Button onClick={() => console.log("Button")} primary>
                        Button
                    </Button>
                    <Button onClick={() => console.log("Button")} secondary>
                        Button
                    </Button>
                    <Button onClick={() => console.log("Button")} minsky>
                        Button
                    </Button>
                    <Button onClick={() => console.log("Button")} inverse>
                        Button
                    </Button>
                </div>
                <div>
                    <Button onClick={() => console.log("Button")} big>
                        Button
                    </Button>
                    <Button onClick={() => console.log("Button")} normal>
                        Button
                    </Button>
                    <Button onClick={() => console.log("Button")} compact>
                        Button
                    </Button>
                </div>
                <div>
                    <Button onClick={() => console.log("Button")} isDisable>
                        Button
                    </Button>
                    <Button onClick={() => console.log("Button")} isSelect>
                        Button
                    </Button>
                </div>

                <div>
                    <Button onClick={() => console.log("Button")} primary big isDisable>
                        Button
                    </Button>
                    <Button onClick={() => console.log("Button")} secondary big isSelect>
                        Button
                    </Button>
                    <Button onClick={() => console.log("Button")} minsky big>
                        Button
                    </Button>
                    <Button onClick={() => console.log("Button")} inverse big>
                        Button
                    </Button>
                </div>
            </div>

            <div>
                <Input placeholder="Normal" type="email" caption="wrong email" error ></Input>
                <Input placeholder="Big " big ></Input>
                <Input placeholder="Compact" compact ></Input>
                <Input placeholder="Disabled" disabled ></Input>
                <Input placeholder="Positive" positive ></Input>
                <Input placeholder="Error" error ></Input>
                <Input defaultValue="Asdasd"></Input>
                <Input  ></Input>
                <Input  ></Input>
            </div>

            <div>
                <CheckBox big value="ASdasdladsandoanosd" caption="value">
                    {" "}
                </CheckBox>
                <CheckBox medium value="ASdasdladsandoanosd" caption="value"></CheckBox>
                <CheckBox small value="ASdasdladsandoanosd" caption="value"></CheckBox>
                <CheckBox small disabled value="ASdasdladsandoanosd" caption="value"></CheckBox>
            </div>

            <div>
                <Switch small></Switch>
                <Switch medium></Switch>
                <Switch disable></Switch>
            </div>
        </div>
    );
};

export default Playground;
