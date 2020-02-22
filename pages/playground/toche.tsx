import React from "react";
import { Button } from "../../components/atoms/Button/index";
import { Input } from "../../components/atoms/Form/input";
import { CheckBox } from "../../components/atoms/Form/checkbox";
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
                <Input placeholder="Normal" type="email" caption="wrong email" error></Input>
                <Input placeholder="Big " big></Input>
                <Input placeholder="Compact" compact></Input>
                <Input placeholder="Disabled" disabled></Input>
                <Input placeholder="Positive" positive></Input>
                <Input placeholder="Error" error></Input>
                <Input text="hello world"></Input>
                <Input min={10}></Input>
                <Input max={10}></Input>
            </div>

            <div>
                <CheckBox big value="ASdasdladsandoanosd" caption="value">
                    {" "}
                </CheckBox>
                <CheckBox medium value="ASdasdladsandoanosd" caption="value"></CheckBox>
                <CheckBox small value="ASdasdladsandoanosd" caption="value"></CheckBox>
                <CheckBox small disabled value="ASdasdladsandoanosd" caption="value"></CheckBox>
            </div>
        </div>
    );
};

export default Playground;
