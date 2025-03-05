import { FC } from "react"
import ContainerComponentAtom from "../atom/Container.Atom"
import ImgComponentAtom from "../atom/Img.Atom"
import { ImgContainerData } from "../../features/imgContainer.slicers/imgContainer.slicer"
type  ImgContainerComponentType = Pick<ImgContainerData, "img_bg" | "heading_patner_name" | "desc_patner">
const imgContainerComponent:FC<ImgContainerComponentType> = ({img_bg, heading_patner_name, desc_patner}) => {
    return (
        <>
        <ContainerComponentAtom className="w-full h-full">
            <ImgComponentAtom imgSrc={img_bg} altImg={heading_patner_name} className="w-full h-full" /> 
            <h1>
                {heading_patner_name}
            </h1>
            <p>{desc_patner}</p>
        </ContainerComponentAtom>
        </>
    )

}
export default imgContainerComponent;