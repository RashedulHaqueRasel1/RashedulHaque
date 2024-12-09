import { BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import laptopWorking from "../../../assets/laptopWorking.json"

const AboutHome = () => {
    return (
        <div className=" mt-24 bg-[#D7F2F9] h-[850px] lg:h-[630px]">



            <div className="  ">

                <div className="mx-auto container">

                    <div className="relative flex justify-center">
                        {/* Background Text */}
                        <h1 className="absolute inset-0 flex justify-center mt-10  text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-blue-500 opacity-15">
                            ABOUT ME
                        </h1>

                        {/* Foreground Text */}
                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black opacity-70 text-center mt-[48px] sm:mt-[58px] md:mt-[68px]">
                                Know Me More
                            </h2>
                            <div className="flex justify-center mt-2">
                                <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-blue-500"></div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col   lg:flex-row justify-around  ">


                        <div className=" ">
                            <Lottie animationData={laptopWorking} loop={true} className="object-contain   h-96  " />
                        </div>

                        {/* Right Side */}
                        <div className="w-full lg:w-2/5 ml-0 lg:ml-10 lg:mt-24">
                            <div className="  p-6 rounded-lg text-black">

                                <div className="space-y-3">
                                    <p className="text-lg font-bold">Name: <span className="font-normal text-primary  ">Rashedul Haque Rasel</span></p>
                                    <hr className="w-full lg:w-60" />
                                    <p className="text-lg font-bold">Education: <span className="font-normal   text-black"> BBA (Accounting)</span></p>
                                    <hr className="w-full lg:w-60" />
                                    <p className="text-lg font-bold">Email:
                                        <span className="font-normal text-primary  ">
                                            <a href="mailto:rashedulhaquerasel1@gmail.com" className="hover:underline"> rashedulhaquerasel1@gmail.com</a>
                                        </span>
                                    </p>
                                    <hr className="w-full lg:w-80" />
                                    <p className="text-lg font-bold">From: <span className="font-normal   text-black">Baipel, Savar, Dhaka, Bangladesh</span></p>
                                    <hr className="w-full lg:w-64" />
                                </div>

                                {/* Social Links */}
                                <div className="mt-4">
                                    <div className="flex space-x-6">
                                        <NavLink to={'https://www.linkedin.com/in/rashedul-haque-rasel1/'} className="inline-flex items-center justify-center p-2    text-base font-bold leading-6 text-primary  border-transparent rounded-full md:w-auto outline outline-offset-2 outline-1  hover:bg-blue-500   hover:text-white   focus:ring-offset-2 focus:ring-indigo-600 cursor-pointer  hover:scale-105 duration-500">
                                            <RiLinkedinFill className="text-xl" />
                                        </NavLink>

                                        <NavLink to={'https://github.com/RashedulHaqueRasel1'} className="inline-flex items-center justify-center p-2    text-base font-bold leading-6 text-primary  border-transparent rounded-full md:w-auto outline outline-offset-2 outline-1  hover:bg-blue-500   hover:text-white   focus:ring-offset-2 focus:ring-indigo-600 cursor-pointer  hover:scale-105 duration-500">
                                            <BsGithub className="text-xl" />
                                        </NavLink>

                                        <NavLink to={'https://www.facebook.com/Rashedul.haque.Rase1'} className="inline-flex items-center justify-center p-2    text-base font-bold leading-6 text-primary  border-transparent rounded-full md:w-auto outline outline-offset-2 outline-1  hover:bg-blue-500   hover:text-white   focus:ring-offset-2 focus:ring-indigo-600 cursor-pointer  hover:scale-105 duration-500">
                                            <FaFacebookF className="text-xl" />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className=" ">
                        {/* About More Button */}
                        <Link to={'/about'} className="relative flex justify-center">
                            <button className="absolute px-4 py-3 md:px-6 md:py-3 lg:px-8 lg:py-3 mt-3 lg:mt-4 hover:border border text-[12px] md:text-[14px] lg:text-[16px] font-bold rounded-lg bg-blue-500 hover:bg-transparent text-black hover:text-black transition duration-1000 ease-in-out flex justify-center items-center">
                                About More ...
                            </button>
                        </Link>

                    </div>
                </div>


            </div>



        </div>
    );
};

export default AboutHome;