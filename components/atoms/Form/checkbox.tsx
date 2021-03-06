import React, { FC, useState, Children } from "react";

import { CheckboxStates, CheckBoxSizing, CheckBoxType, CheckboxStateTypes } from "./constants"
import { styled } from "linaria/react";

const CustomCheckBox = styled.div<CheckBoxProps & React.AllHTMLAttributes<any>>`
    width: ${props => props.newSize.width ? props.newSize.width : props.style.width};
    height: ${props => props.newSize.height ? props.newSize.height : props.style.height};
    background: white;
    border: 1.5px solid;
    border-color: ${props => props.disabled ? props.state.color : props.color ? props.color : "black"};
    border-radius: 5px;
    cursor: ${props => props.disabled ? props.state.cursor : "pointer"};
    margin: 0.3em;
    
`

const Checked = styled.div<CheckBoxProps>`
    width: ${props => props.newSize.chwidth};
    height: ${props => props.newSize.chheight};
    background: ${props => props.color ? props.color : "black"};
    border-radius: ${props => props.small ? "4px" : "5px"};
    margin-left: ${props => props.big ? "17%" : props.small ? "13%" : "16.3%"};
    margin-top: ${props => props.big ? "16%" : props.small ? "13%" : "13%"};
    cursor: ${props => props.disabled ? props.state.cursor : "pointer"};
`

const Text = styled.p<CheckBoxProps>`
    font-size:15px;
    font-family: "Karla";
    display:flex;
    flex-direction: row;
    color: ${props => props.state ? props.state.color : "black"};
    margin-left: 0.3em;
    margin-top: ${props => props.big ? "0.75em" : props.medium ? "0.45em" : "0.4em"};
    cursor: ${props => props.state ? props.state.cursor : "pointer"}

`
const Wrapper = styled.div<React.AllHTMLAttributes<any>>`
    display: ${props => props?.style?.display ? props?.style?.display : "flex"};
    flex-direction: ${props => props?.style?.flexDirection ? props?.style?.direction : "row"}
`
export interface CheckBoxProps {
    big?: boolean;
    small?: boolean;
    medium?: boolean;
    color?: string;
    value?: string
    disabled?: boolean;
    caption?: string;
    neutral?: boolean;
    newSize?: CheckBoxSizing;
    state?: CheckboxStates;
    as?: "div";
}



const CheckBox: FC<CheckBoxProps & React.AllHTMLAttributes<any>> = (props: CheckBoxProps & React.AllHTMLAttributes<any>) => {
    const [checked, setChecked] = useState<boolean>(false);

    const click = () => {
        if (!props.disabled) {
            if (!checked) {
                setChecked(true)
            } else {
                setChecked(false)
            }
        }
    }


    let state: CheckboxStates;

    if (props.disabled) {
        state = CheckboxStateTypes.disabled;
    } else {
        state = CheckboxStateTypes.neutral;
    }


    let newSize: CheckBoxSizing;
    if (props.small) {
        newSize = CheckBoxType.small
    } else if (props.big) {
        newSize = CheckBoxType.big
    } else {
        newSize = CheckBoxType.medium
    }


    let newProps = { ...props, newSize, state }
    return (
        <Wrapper>
            <CustomCheckBox {...newProps} onClick={() => click()}>
                {checked ? <Checked {...newProps} /> : ""}
            </CustomCheckBox>
            <Text onClick={() => click()} big={props.big} small={props.small} medium={props.medium} state={state}>{props?.caption || ""}</Text>
        </Wrapper>);

}

export { CheckBox };