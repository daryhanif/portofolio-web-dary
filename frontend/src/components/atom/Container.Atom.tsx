import { FC } from "react"

interface ContainerComponentType {
    children: React.ReactNode,
    className:string
}


const ContainerComponentAtom:FC<ContainerComponentType>= ({children, className}) => {

    return(
        <>
            <div className={className}>{children}</div>
        </>
   
)
}

export default ContainerComponentAtom;