import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/stores.folders/store";
import { toggle } from "../../features/menu.slicers/menu.slicer";

const SidebarComponent = () =>{
    const isOpen = useSelector((state:RootState)=>state.menuNavbar.isOpen);
    const dispatch = useDispatch();  
    return(
        <>
        <div className={` flex justify-end w-full h-screen  z-50 m-0 top-0 ${!isOpen ? 'hidden': 'fixed'}`}>
            <div className="relative w-0 xl:w-8/12 h-screen  bg-gray-500/65 "onClick={()=>dispatch(toggle())}>
                    
            </div>
            <div className="relative w-full xl:w-4/12 h-screen bg-amber-950 opacity-100">

            </div>
        </div>
        </>
    )
}
export default SidebarComponent;