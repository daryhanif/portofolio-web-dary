import { FC } from "react";

interface LabelComponentAtomType{
    children: React.ReactNode
    styles:string
}
const LabelComponentAtom:FC<LabelComponentAtomType> = ({children, styles}) => {
    return(
        <label className={styles}>{children}</label>
    )
}
export default LabelComponentAtom;