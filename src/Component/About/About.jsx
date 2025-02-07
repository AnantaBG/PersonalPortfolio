import { Card } from 'flowbite-react';
import Me from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
const About = () => {
    return (
        <div className='lg:w-3/4 mx-auto md:w-10/12 w-11/12 mt-5' id="about">
            <div className="flex flex-col justify-center  mx-auto text-center">
            <h5>Get To Know</h5>
            <h1 className="text-3xl text-[#4db5ff]">About Me</h1>
            </div>
            <div className="md:grid flex flex-col md:grid-cols-2 mt-5">
                <div className="lg:w-3/5 md:w-10/12 w-7/12 aspect-square bg-[linear-gradient(45deg,transparent,#4db5ff,transparent)] place-items-center rounded-3xl mx-auto md:mb-1 mt-3 mb-8">
                <img className='rounded-3xl overflow-hidden  rotate-[10deg] transition duration-[600ms] ease-in-out hover:rotate-0' src={Me} alt="" />
                </div>
                <div className='flex  mx-auto flex-col'>
                <div className="md:flex grid grid-cols-3 mt-3 max-h-36 text-center justify-center mx-auto ml-2 gap-1 ">
                <Card className='mb-2 bg-transparent backdrop-blur-3xl hover:backdrop-brightness-75'>
                   <h1 className=''><FaAward className='text-2xl mx-auto mb-2 text-[#4db5ff]'></FaAward> <h5>Experience</h5></h1>
                   <p className='text-xs opacity-50'>6 Months  Learning</p>
                </Card>
                <Card className=' mb-2 bg-transparent backdrop-blur-3xl hover:backdrop-brightness-75'>
                   <h1 className=''><FiUsers className='text-2xl mx-auto mb-2 text-[#4db5ff]'></FiUsers> <h5>Clients</h5></h1>
                   <p className=' opacity-50 text-xs'>Hired 6 Times</p>
                </Card>
                <Card className=' mb-2 bg-transparent backdrop-blur-3xl hover:backdrop-brightness-75'>
                   <h1 className=''><VscFolderLibrary className='text-2xl mx-auto mb-2 text-[#4db5ff]'></VscFolderLibrary> <h5>Projects</h5></h1>
                   <p className='opacity-50 text-xs'>5 Projects Completed</p>
                </Card>
                </div>
                <div className='ml-2 mt-5'>
                    <p>Hi, I&apos;m Ananta Banik, a passionate and driven web developer eager to contribute to innovative projects.  I&apos;m constantly learning and expanding my skillset, and I&apos;m excited to connect with opportunities in the web development world.</p>
                <div>
                <h1 className='text-2xl text-[#4db5ff]'>Interests:</h1>
                <ul className='ml-20'>
                    <li>Cricket</li>
                    <li>Reading Web Novels</li>
                    <li>Travelling</li>
                </ul>
                </div>
                

                <a href="#contact" className='btn btn-primary mt-5'>Let&apos;s Talk</a>
                </div>
            </div>
            
            </div>
            
        </div>
    );
};

export default About;