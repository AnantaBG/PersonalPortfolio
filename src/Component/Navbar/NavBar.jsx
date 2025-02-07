import { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { CgViewCols } from "react-icons/cg";

const NavBar = () => {
    const [activeNav, setaActiveNav] = useState('#');
    return (
        <nav className="bg-[rgba(0,0,0,0.3)]  w-max opacity-60 flex py-3 px-7 z-10 fixed left-[50%] -translate-x-[50%]  bottom-0 rounded-[3rem] backdrop-blur-3xl ">
            <div className="bg-transparent p-1 rounded-[50%]  flex gap-6 text-white text-xl ">
            <a onClick={()=> setaActiveNav('#')} className={activeNav === '#' ? 'active':''} href="#"><AiOutlineHome/> </a>
            <a onClick={()=> setaActiveNav('#about')} className={activeNav === '#about' ? 'active':''} href="#about"><AiOutlineUser/></a>
            <a onClick={()=> setaActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''} href="#experience"><BiBook/> </a>
            <a onClick={()=> setaActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active':''} href="#portfolio"><CgViewCols/> </a>
            <a onClick={()=> setaActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''} href="#contact"><BiMessageSquareDetail/></a>
            </div>
        </nav>
    );
};

export default NavBar;