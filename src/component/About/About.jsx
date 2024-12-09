import { BsGithub } from "react-icons/bs";
import {  FaWhatsapp } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";



const About = () => {


    return (
        <div className="container mx-auto lg:my-28 my-10 relative">

            {/* Blur Image: Move to End */}
            <div className="absolute">
                <img
                    src="https://i.postimg.cc/yY7Bb1YT/blur-1.png"
                    alt=""
                    className=" "
                />
            </div>

            <div className=" lg:mb-8 relative p-6 lg:p-3">


                <div className="relative flex justify-center mt-16">
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


                <div className="flex flex-col  mt-10 lg:mt-0 lg:flex-row justify-around">


                    <div className="text-black w-full lg:w-3/5 ml-0 lg:ml-10 lg:mt-24 ">
                        <h1 className="text-2xl lg:text-4xl font-bold mb-4 ">
                            I&#39;m <span className="text-blue-500 text-opacity-80">Rashedul Haque Rasel</span> a Web Developer,
                        </h1>
                        <p className="text-black text-opacity-65 text-lg lg:text-xl h-full">
                            I am a dedicated web developer with expertise in both front-end and back-end technologies. My aim is to create innovative, user-friendly applications, enhance user experiences, and drive business growth while aspiring to lead and continuously learn in a dynamic environment.
                            <br /><br />
                            My technical skills extend to backend integration using Express.js and MongoDB, allowing me to develop comprehensive and robust web solutions. Additionally, I am proficient in implementing secure authentication systems with Firebase, ensuring data security and privacy for users.
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="w-full lg:w-2/5 ml-0 lg:ml-10 lg:mt-24  mt-10">
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

                                        <NavLink to={'https://api.whatsapp.com/send/?phone=8801772582460'} className="inline-flex items-center justify-center p-2    text-base font-bold leading-6 text-primary  border-transparent rounded-full md:w-auto outline outline-offset-2 outline-1  hover:bg-blue-500   hover:text-white   focus:ring-offset-2 focus:ring-indigo-600 cursor-pointer  hover:scale-105 duration-500">
                                             <FaWhatsapp className="text-2xl" />
                                        </NavLink>

                                        <NavLink to={'https://github.com/RashedulHaqueRasel1'} className="inline-flex items-center justify-center p-2    text-base font-bold leading-6 text-primary  border-transparent rounded-full md:w-auto outline outline-offset-2 outline-1  hover:bg-blue-500   hover:text-white   focus:ring-offset-2 focus:ring-indigo-600 cursor-pointer  hover:scale-105 duration-500">
                                            <BsGithub className="text-xl" />
                                        </NavLink>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;