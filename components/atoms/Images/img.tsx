import React, { FC } from 'react';
import { styled } from 'linaria/react';


const CustomImage = styled.div<Image>`
    background-image: url("/images/bulb1.png");
    border-radius: ${props=>props.radius ? props.radius : "0px"};
    width: ${props => props.width ? props.width : "auto"};
    height: ${props => props?.height ? props.height : "auto"}
`

 interface Image  {
    path: string,
    radius?: string,
    width?: string,
    height?: string,
}

const Image: FC<Image> = (props: Image) =>{

    return <CustomImage {...props} ></CustomImage>

}

export {Image}; 