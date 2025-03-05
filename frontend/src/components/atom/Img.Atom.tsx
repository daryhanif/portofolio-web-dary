import { FC } from "react";

interface imgType{
    imgSrc: string,
    altImg: string,
    className:undefined|string
}

const ImgComponentAtom:FC<imgType> = ({imgSrc, altImg, className}) =>{
    return(
        <img src={imgSrc} alt={altImg} className={className} />
    )
}

export default ImgComponentAtom
export type {imgType}