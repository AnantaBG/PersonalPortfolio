import { FaGithub } from "react-icons/fa";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa6";

const HeaderSoc = () => {
    return (
        <div className="flex sm:visible  invisible flex-col items-center gap-4 absolute left-0 bottom-14 after:w-1 after:h-10 after:bg-[#4db5ff]">
            <a href="https://www.linkedin.com/in/anchba" target="_blank"><FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com/AnantaBanik3x/" target="_blank"> <FaFacebook />

            </a>
            <a href="https://github.com/AnantaBG" target="_blank"><FaGithub />
            </a>
            
        </div>
    );
};

export default HeaderSoc;