import { FC } from "react";

interface InputType {
    typeInput: string,
    
    id: string | undefined,
    name:string | undefined,
    eventHandlers:(data:unknown)=>void,
    placeHolder: string|undefined;
    styles: string

}
const input:FC<InputType> = ({typeInput,  eventHandlers, name, id, placeHolder, styles}) =>{
    return(
        <>
            <input type={typeInput} className={styles} name={name} id={id} onClick={eventHandlers} placeholder={placeHolder} />
        </>
    )
}
export default input;