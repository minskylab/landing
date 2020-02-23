import React,{ FC } from 'react';
import { styled } from 'linaria/react';

const CustomCard = styled.div`


`



const Card: FC<React.AllHTMLAttributes<any>> = (props: React.AllHTMLAttributes<any>) => {


    return <CustomCard></CustomCard>
}


export {Card};