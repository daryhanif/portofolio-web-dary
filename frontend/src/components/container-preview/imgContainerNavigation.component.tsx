import { FC } from "react"

import { SwiperSlide } from "swiper/react";
import ContainerComponentAtom from "../atom/Container.Atom";
import ImgComponentAtom from "../atom/Img.Atom";
import { ImgContainerData } from "../../features/imgContainer.slicers/imgContainer.slicer";


type ImgContainerNavigationComponentType = Pick<ImgContainerData, "heading_patner_name"| "img_logo">


const ImgContainerNavigationComponent:FC<ImgContainerNavigationComponentType> = ({heading_patner_name, img_logo}) =>{
    return(
        <ContainerComponentAtom className="w-screen h-11">
          <SwiperSlide>
            <ImgComponentAtom className="w-10 h-11 w" imgSrc={img_logo} altImg={heading_patner_name}/>
          </SwiperSlide>
        </ContainerComponentAtom>
    )
}

export default ImgContainerNavigationComponent