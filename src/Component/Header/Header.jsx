import CV from '../../assets/cv.pdf'
import Me from '../../assets/me1.png'
import HeaderSoc from './HeaderSoc';
const Header = () => {
    return (
        <header className='h-screen pt-28 overflow-hidden mb-20'>
            <div className=" text-center h-full relative  lg:w-3/4 mx-auto md:w-10/12 w-11/12">
            <div>
            <h1 className='text-xl mb-2'>Hello I`m</h1>
            <h1 className="text-4xl mb-3 font-mono font-bold">Ananta Banik</h1>
            <h1 className="opacity-50 text-xl">Frontend Devoloper</h1>
            </div>
            <div className='mt-10 flex gap-5 justify-center'>
            <a href={CV} className='btn' download>Download CV</a>
            <a className='btn btn-primary' href="#contact">Lets Talk</a>
            </div>
            <div>
            <HeaderSoc></HeaderSoc>
            </div>
            <div className='bg-gradient-to-r from-[#4db5ff] to-transparent w-[22rem] h-[30rem] absolute left-[calc(50%-11rem)] mt-16 rounded-tl-[12rem] rounded-tr-[12rem] pt-28 overflow-hidden'>
                <img className=' ' src={Me} alt="" />
            </div>
            <div className='sm:visible  invisible absolute -right-9 bottom-20 rotate-90'>
            <a href="#contact">Scroll Down</a>
            </div>
            
            </div>
        </header>
    );
};

export default Header;