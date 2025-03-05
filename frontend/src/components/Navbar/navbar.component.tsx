
import { useDispatch } from "react-redux";
import imglogo from "../../assets/react.svg"
import { toggle } from "../../features/menu.slicers/menu.slicer";
const NavbarComponent = () => {

const dispatch = useDispatch();     

    return (
    <>
    <header className="relative w-full h-11 bg-amber-300 flex justify-between px-1.5 items-center z-40">
        <div><img src={imglogo} alt="" /></div>
        <label className="w-6 items-end fixed right-7 group cursor-pointer z-10">
            <input type="checkbox" className="hidden" onChange={() => dispatch(toggle())}/>
            
            <div className="flex flex-col gap-1.5 pr-2">
                <div className="w-5 bg-black rounded-full h-0.5 transition-all"></div>
                <div className="w-3 bg-black rounded-full h-0.5 transition-all group-hover:w-5"></div>
                <div className="w-5 bg-black rounded-full h-0.5 transition-all"></div>
            </div>
        </label>
    </header>
    </>
    )
}
export default NavbarComponent;
