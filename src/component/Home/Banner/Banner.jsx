// import 'animate.css';
import { useState } from 'react';
import { ImProfile } from 'react-icons/im';
import { MdOutlineWhatsapp } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';



const Banner = () => {


    // image hover animation
    const [style, setStyle] = useState({
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    });

    const handleMouseMove = (e) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const width = target.clientWidth;
        const height = target.clientHeight;

        // Calculate the rotation values based on mouse position
        const rotateY = ((offsetX - width / 2) / width) * 30; // Adjust Y rotation (horizontal axis)
        const rotateX = ((height / 2 - offsetY) / height) * 30; // Adjust X rotation (vertical axis)

        // Update the style with dynamic transform
        setStyle({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`,
        });
    };

    const resetTransform = () => {
        setStyle({
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        });
    };



    return (

        <div className="mx-auto container relative">

            <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:gap-60 mt-28 lg:mt-52">
                {/* Left Side Text */}
                <div className="z-10 relative text-left p-4 lg:p-0 mt-4 lg:mt-10 md:mt-8">
                    <h1 className="text-2xl md:text-3xl lg:text-xl xl:text-3xl font-bold text-black mb-4">Hi There!</h1>
                    <h1 className="text-3xl md:text-4xl lg:text-2xl xl:text-5xl font-bold text-black mb-4">
                        I&lsquo;m <span className="text-blue-500">Rashedul Haque</span>
                    </h1>
                    <div className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-black mb-4">
                        <Typewriter
                            options={{
                                strings: ['Front End Web Developer', 'MERN Stack Developer'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                                delay: 100,
                            }}
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 mt-6 lg:mt-10 justify-center lg:justify-start">
                        <Link to={'https://api.whatsapp.com/send/?phone=8801772582460'}>
                            <button className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 hover:border border text-[12px] md:text-[14px] lg:text-[16px] font-bold rounded-lg bg-blue-500 hover:bg-transparent text-black hover:text-black transition duration-1000 ease-in-out flex justify-center items-center">
                                Contact   <MdOutlineWhatsapp className="ml-2 text-2xl text-black  " />
                            </button>
                        </Link>
                        <button className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 hover:border border text-[12px] md:text-[14px] lg:text-[16px] font-bold rounded-lg hover:bg-blue-500 bg-transparent text-black hover:text-black transition duration-1000 ease-in-out flex justify-center items-center">
                            View Resume <ImProfile className="ml-2" />
                        </button>
                    </div>
                </div>

                {/* Right Side Image */}
                <div
                    className="z-10 border border-blue-400 border-opacity-70 rounded-xl cursor-pointer"
                    style={style}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={resetTransform}
                >
                    <img
                        src={"https://i.postimg.cc/d31q0rXz/Rashedul-Haque-Rasel1.png"}
                        alt="Digital Experience"
                        className="w-60 md:w-64 lg:w-72 xl:w-72 object-cover rounded-2xl"
                    />
                </div>
            </div>
        </div>


    );
};

export default Banner;