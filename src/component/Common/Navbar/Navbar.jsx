import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import Rasel from '../../../assets/MERN_Stack_Developer_resume_of_Rashedul_Haque_Rasel.pdf'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    const NavLink = <>
        <Link to={'/'} className="text-[#00233F] text-xl font-semibold hover:text-[#005397]">Home</Link>
        <Link to={'/about'} className="text-[#00233F] text-xl font-semibold hover:text-[#005397]">About</Link>
        <Link to={'/skill'} className="text-[#00233F] text-xl font-semibold hover:text-[#005397]">Skill</Link>
        <Link to={'/project'} className="text-[#00233F] text-xl font-semibold hover:text-[#005397]">Project</Link>
        <Link to={'/Contact'} className="text-[#00233F] text-xl font-semibold hover:text-[#005397]">Contact</Link>
    </>

    return (
        <div>
            <nav className={`fixed top-0 left-0 w-full   lg:py-4 z-40 transition-colors duration-300 ${isScrolled
                ? "  backdrop-blur-lg   shadow-lg"
                : "bg-transparent"
                }`} >

                {/* Navbar Container */}
                <div className="flex justify-between  items-center font-semibold mx-auto container p-4 md:p-0">
                    {/* Logo */}
                    <Link to={'/'}>
                        <img src={"https://i.postimg.cc/0yxrSfpR/Rasel-Logo.png"} alt="" className="w-full h-20 " />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex xl:gap-10 md:gap-8 gap-2">
                        {NavLink}
                    </div>

                    {/* Button */}
                    <div className="hidden md:block">

                        <a href={Rasel} download="MERN_Stack_Developer_resume_of_Rashedul_Haque_Rasel">
                            <button className="px-4 py-2 md:px-6 md:py-3 lg:px-6 lg:py-3  border-2 text-[12px] md:text-[14px] lg:text-[16px] font-bold rounded-lg bg-blue-500 hover:bg-transparent text-black hover:text-black transition duration-1000 ease-in-out flex justify-center items-center" >
                                Download CV <FaDownload className='ml-2' />
                            </button>
                        </a>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">

                        {
                            menuOpen ?
                                <></>
                                :
                                <button onClick={toggleMenu} className="text-3xl ">
                                    <FiMenu />
                                </button>
                        }
                    </div>
                </div>
            </nav>



            {/* Mobile Menu - Slide-in from Left */}

            <div
                className={`${menuOpen ? "translate-x-0" : "-translate-x-full"
                    } fixed inset-0 bg-black bg-opacity-50 md:hidden transition-all duration-300 z-50`}

            >

                <div
                    className={`${menuOpen ? "translate-x-0" : "-translate-x-full"
                        } fixed left-0 top-0 w-3/4 h-full bg-white shadow-lg p-6 transition-transform duration-300 z-50`}
                >
                    {/*  */}
                    <button onClick={toggleMenu} className="text-3xl border rounded-full p-2">
                        <FiX />
                    </button>

                    <div className="flex flex-col gap-4 mt-8">

                        {NavLink}

                        <button className="px-4 py-2 md:px-6 md:py-3 lg:px-6 lg:py-3  border-2 text-[12px] md:text-[14px] lg:text-[16px] font-bold rounded-lg bg-blue-500 hover:bg-transparent text-black hover:text-black transition duration-1000 ease-in-out flex justify-center items-center">
                            Download CV <FaDownload className='ml-2' />
                        </button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
