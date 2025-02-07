import { Card } from "flowbite-react";
import { DiMongodb } from "react-icons/di";
import { FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { RxVercelLogo } from "react-icons/rx";
import { SiDaisyui, SiExpress } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";

const Experience = () => {
    return (
        <div className="mt-20 lg:w-3/4 mx-auto md:w-10/12 w-11/12 " id="experience">
            <div className="flex mb-10 flex-col justify-center  mx-auto text-center">
                <h5 className="mt-5">What Skills I Have?</h5>
                <h2 className="text-3xl mt-6 text-[#4db5ff]">My Skills</h2>
            </div>
            <div className="grid  mt-5 md:grid-cols-2 gap-2 mb-5">
                <div>
                <Card className="bg-transparent backdrop-blur-3xl hover:backdrop-brightness-75 min-h-96">
                    <h1 className="text-4xl mb-5">Frontend</h1>
                    <div className="grid grid-cols-3 gap-y-8">
                        <div className="flex flex-col">
                        <FaHtml5 className="text-3xl text-[#ff7817]" />
                        <p>HTML</p>
                        </div>
                    
                    <div className="flex flex-col ">
                    <IoLogoCss3 className="text-3xl text-[#7ec9ff]" />
                    <p>CSS</p>
                    </div>
                    <div className="flex flex-col ">
                    <FaJs className="text-3xl text-[#fff700]" />
                    <p>JS</p>
                    </div>
                    <div className="flex flex-col ">
                    <RiTailwindCssFill className="text-3xl text-[#4db5ff]" />
                    <p>TailWind</p>
                    </div>
                    <div className="flex flex-col ">
                    <FaReact className="text-3xl text-[#4db5ff]" />
                    <p>React</p>
                    </div>
                    <div className="flex flex-col ">
                    <TbBrandVite className="text-3xl text-[#4db5ff]" />
                    <p>Vite</p>
                    </div>
                    <div className="flex flex-col ">
                    <FaNodeJs className="text-3xl text-[#4dff8b]" />
                    <p>NodeJS</p>
                    </div>
                    <div className="flex flex-col ">
                    <SiDaisyui className="text-3xl text-[#d2ecff]" />
                    <p>DaisyUI</p>
                    </div>
                    
                    </div>
                </Card>
                </div>
                <div>
                <Card className="bg-transparent backdrop-blur-3xl hover:backdrop-brightness-75 min-h-96 ">
                <h1 className="text-4xl mb-5">Backend</h1>
                <div className="grid text-4xl grid-cols-3 gap-y-12">
                <div className="flex flex-col ">
                <DiMongodb className="text-green-500" />
                <p className="text-base">MongoDB</p>
                </div>
                <div className="flex flex-col ">
                <SiExpress />
                <p className="text-base">Express</p>
                </div>
                <div className="flex flex-col ">
                <IoLogoFirebase className="text-yellow-300" />
                <p className="text-base">FireBase</p>
                </div>
                <div className="flex flex-col ">
                    <RxVercelLogo className=" text-[#ebf7ff]"/>
                    <p className="text-base">Vercel</p>
                </div>
                </div>
                </Card>
                </div>
            </div>
        </div>
    );
};

export default Experience;