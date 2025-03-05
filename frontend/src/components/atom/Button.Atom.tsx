import { FC } from "react"

interface ButtonComponentAtomType{
    children: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
}
const ButtonComponentAtom:FC<ButtonComponentAtomType> = ({className, children, type="button", onClick }) => {
    return(
        <button className={className} type={type} onClick={onClick}>{children}</button>
    )
}
export default ButtonComponentAtom