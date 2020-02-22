import React, {FC,useState} from "react";

import { SwitchStates, SwitchSizing,SwitchSizes,SwitchStatatus } from "./constants"
import { styled } from "linaria/react";

const CustomSwitch = styled.div<SwitchProps & React.AllHTMLAttributes<any>>`
    width: ${props => props?.newSize?.width ? props?.newSize?.width : props?.style?.width};
    height: ${props => props?.newSize?.height ? props.newSize?.height : props.style?.height};
    border-radius: 13px;
    border: 1px solid ${props => props?.newStatus?.border};
    background: ${props => props?.newStatus?.color ?props?.newStatus?.color : props?.style?.background };
    cursor: ${props => props?.newStatus?.cursor ?props?.newStatus?.cursor : props?.style?.cursor };

`

const Switcher = styled.div<SwitchProps & React.AllHTMLAttributes<any>>`
    width: ${props => props?.newSize?.chwidth ? props?.newSize?.chwidth : props?.style?.width};
    height: ${props => props?.newSize?.chheight ? props.newSize?.chheight : props.style?.height};
    border-radius: 50%;
    background: white;
    margin-top: 0.1em;
    margin-left: ${props => props.small ? "0.3em" : "0.3em"};
    transform: ${props => props.small && props.on ? "translate(16px, 0px)" : props.on && props.medium ? "translate(20px, 0px)" : "0"};
    transition: 0.7s ease-in-out;
`
export interface SwitchProps {
    small?: boolean;
    medium?: boolean;
    neutral?: boolean;
    disable?: boolean;
    on?: boolean;
    color?: string;
    newSize?: SwitchSizing;
    newStatus?: SwitchStates;
    as?: "div";
}

const Switch: FC<SwitchProps & React.AllHTMLAttributes<any>> = (props: SwitchProps & React.AllHTMLAttributes<any>) => {

    const [on, setOn] = useState(false)
    let newSize: SwitchSizing;
    if (props.small) {
        newSize = SwitchSizes.small
    } else  {
        newSize = SwitchSizes.medium
    } 

    let newStatus: SwitchStates;
    if (props.disable) {
        newStatus = SwitchStatatus.disabled;
    } else  {
        newStatus = SwitchStatatus.neutral;
    } 
    const click = ()=>{
        if(!props.disable){
            if(!on){
                setOn(true);
            }else{
                setOn(false);
            }
        }
    }

    props = {...props, newSize,newStatus}

    return (<CustomSwitch {...props} onClick={()=>click()}>
        <Switcher {...props} onClick={()=>click()}  on={on}></Switcher>
    </CustomSwitch>);
}



export {Switch};