import { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { ImCancelCircle } from "react-icons/im";
import { NavLink} from "react-router-dom";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    // const location = useLocation();
    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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


    const navLink =
        [
            {
                title: 'Home',
                path: '/'
            },
            {
                title: 'About',
                path: '/about'
            },
            {
                title: 'Skill',
                path: '/skill'
            },
            {
                title: 'Project',
                path: '/project'
            },
            {
                title: 'Contact',
                path: '/contact'
            },
        ]



    return (
        <div>
            <nav
                className={`fixed top-0 left-0 w-full   lg:py-4 z-40 transition-colors duration-300 ${isScrolled
                    ? "backdrop-blur-lg  shadow-md"
                    : "bg-transparent"
                    }`}
            >

                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto   lg:mt-0">

                    <a href="/" className=" ">
                        {/* <FaLaptopCode className="text-4xl mr-2 "/> */}

                        <img src={"https://i.postimg.cc/0yxrSfpR/Rasel-Logo.png"} alt="" className="w-full h-20 "/>
 
                    </a>


                    <div className="flex items-center lg:order-2">
                        <button className="px-4 py-2 md:px-6 md:py-3 lg:px-6 lg:py-3 hover:border   border-2 text-[12px] md:text-[14px] lg:text-[16px] font-bold rounded-lg hover:bg-blue-500 bg-transparent text-black hover:text-black transition duration-1000 ease-in-out flex justify-center items-center">
                            Download CV <FaDownload className='ml-2' />
                        </button>

                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden "
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? (

                                <ImCancelCircle className="text-2xl" />
                            ) : (

                                <HiMiniBars3BottomRight className="text-2xl " />
                            )}
                        </button>

                    </div>


                    <div
                        className={`${isMenuOpen
                            ? "max-h-screen translate-y-0 opacity-100"
                            : "max-h-0 -translate-y-full opacity-0"
                            } overflow-hidden transition-all duration-1000 ease-in-out items-center justify-between w-full h-96 lg:h-10 lg:flex lg:w-auto lg:order-1 bg-blue-200 rounded-lg lg:bg-transparent `}
                    >
                        <div className="flex items-center justify-center">
                            <ul className="flex flex-col   font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                                {
                                    navLink.map(nav => (
                                        <li className=" font-semibold hover:text-blue-600 hover:underline duration-500 text-2xl" key={nav.path}><NavLink to={nav.path}>{nav.title}</NavLink></li>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;
