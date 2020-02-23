import React, { FC, useState } from 'react';


import { styled } from "linaria/react";
import { RadioStatus, RadioStates, RadioState } from "./constants"

const CustomButtonGroup = styled.div<RadioButtonGroupProps & React.AllHTMLAttributes<any>>`
    display: flex;
    flex-direction: ${props => props.horizontal ? "row" : "column"};
`
const CustomRadioButton = styled.div<RadioButtonGroupProps & React.AllHTMLAttributes<any>>`
    background: white;
    margin-top: ${props => props.horizontal ? "" : "0.9em"};
    border: 1px solid ${props => props.newStatus.color ? props.newStatus.color : "black"};
    width: 18px;
    height: 18px;
    border-radius: 50%;
`
const Text = styled.p<RadioButtonGroupProps>`
    font-size: 15px;
    font-family: "Karla";
    margin-left: 0.3em;

`
const Checked = styled.div<RadioButtonGroupProps>`
    width: 10px;
    height: 10px;
    border-radius:50%;
    background:  ${props => props.newStatus.color ? props.newStatus.color : "black"};
    margin-left: 20%;
    margin-top: 22%;

`

const Wrapper = styled.div<RadioButtonGroupProps>`
    display: flex;
    flex-direction: ${props => props.horizontal ? "column" : "row"};
`


type Radio ={
     value: string; 
     name: string;
      text?: string;
       disable?: boolean;
        selected?: boolean; 
    }

interface RadioButtonGroupProps {
    value?: string;
    disable?: boolean;
    error?: boolean;
    primary?: boolean;
    secondary?: boolean;
    horizontal?: boolean;
    vertical?: boolean;
    name?: string;
    newStatus?: RadioState;

    maxSelected?: number;
    minSelected?: number;
    as?: "div";
    RadioButtons: Radio[];
}


const RadioButtonGroup: FC<RadioButtonGroupProps & React.AllHTMLAttributes<any>> = (props: RadioButtonGroupProps & React.AllHTMLAttributes<any>) => {
    type Check = {
        value: string,
        active: boolean
    }
    const [checked, setChecked] = useState<Check>({value:"",active: false});

    let newRadioButton: Radio[] = props.RadioButtons;

    const click = (value: string) => {
        console.log(value)
        if (!props.disabled) {
            newRadioButton.map(val => {
                if(val.value === value){
                    val.selected = true;
                }
            })
        }
    }

    let newStatus: RadioState;

    if (props.disable) {
        newStatus = RadioStatus.disable
    } else if (props.error) {
        newStatus = RadioStatus.error
    } else if (props.secondary) {
        newStatus = RadioStatus.secondary
    } else {
        newStatus = RadioStatus.primary
    }


    props = { ...props, newStatus }

    return (
        <CustomButtonGroup {...props} > {
            newRadioButton.map((value, index, arr) => {
                return <Wrapper {...props}>
                    <CustomRadioButton {...props} onClick={() => click(value.value)}>  {value.selected ? <Checked {...props} /> : ""} </CustomRadioButton>
                    <Text onClick={() => click(value.value)} {...props}>{value.text || ""}</Text> </Wrapper>
            })
        }
        </CustomButtonGroup>
    )
}

export { RadioButtonGroup }