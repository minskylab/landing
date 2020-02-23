import React, {FC,useState} from 'react';


import { styled } from "linaria/react";
import {RadioStatus ,RadioStates, RadioState} from "./constants"

const CustomButtonGroup = styled.div<RadioButtonGroupProps & React.AllHTMLAttributes<any>>`
    display: flex;
    flex-direction: ${props=> props.horizontal ? "row":"column"};
`
const CustomRadioButton = styled.div<RadioButtonGroupProps & React.AllHTMLAttributes<any>>`
    background: white;
    margin-top: ${props => props.horizontal ? "": "0.9em"};
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
    flex-direction: ${props => props.horizontal ? "column":"row"};
`
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
    RadioButtons: {value:string,name:string,text?:string, disable?:boolean}[];
}


const RadioButtonGroup: FC<RadioButtonGroupProps & React.AllHTMLAttributes<any>> = (props: RadioButtonGroupProps & React.AllHTMLAttributes<any>) => {
    const [checked, setChecked] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(0);
    const click = () => {
        if (!props.disabled) {
            if(props?.maxSelected && props.maxSelected <= counter){
                if (!checked) {
                    setChecked(true)
                    setCounter(counter + 1)
                } else {
                    setChecked(false)
                }
            }else{
                if (!checked) {
                    setChecked(true)
                    setCounter(counter + 1)
                } else {
                    setChecked(false)
                }
            }
              
        }
    }

    let newStatus: RadioState;

        if(props.disable){
            newStatus = RadioStatus.disable
        }else if (props.error){
            newStatus = RadioStatus.error
        }else if(props.secondary){
            newStatus = RadioStatus.secondary
        }else{
            newStatus = RadioStatus.primary
        }


    props = {...props, newStatus}

return (<CustomButtonGroup {...props} > {
    props.RadioButtons.map((value,index,arr)=>{
    return <Wrapper {...props}>
        <CustomRadioButton {...props}  onClick={click}>  {checked ? <Checked {...props} /> : ""} </CustomRadioButton> 
        <Text onClick={click} {...props}>{value.text||""}</Text> </Wrapper>
    })
}
 </CustomButtonGroup>)
}

export {RadioButtonGroup}