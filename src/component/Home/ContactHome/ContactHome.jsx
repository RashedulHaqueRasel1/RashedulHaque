import { Link } from "react-router-dom";

const contactIcon = [
    {
        name: "gmail",
        image: 'https://i.postimg.cc/SKtLjkNb/gmail.png',
        link: "mailto:rashedulhaquerasel1@gmail.com"
    },
    {
        name: "linkedin",
        image: 'https://i.postimg.cc/DZ9qd6XC/linkedin.png',
        link: "https://www.linkedin.com/in/rashedul-haque-rasel1/"
    },
    {
        name: "github",
        image: 'https://i.postimg.cc/vZY5zc4d/github.png',
        link: "https://github.com/RashedulHaqueRasel1"
    },
    {
        name: "whatsapp",
        image: 'https://i.postimg.cc/JnDNkvGD/whatsapp.png',
        link: "https://api.whatsapp.com/send/?phone=8801772582460"
    },

]
const ContactHome = () => {

    return (
        <div>

            <div className="container mx-auto lg:my-20 my-16">

                <div className="relative flex justify-center">
                    {/* Background Text */}
                    <h1 className="absolute inset-0 flex justify-center mt-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-700 opacity-10">
                        Let&apos;s Connect
                    </h1>
                    {/*  Text */}
                    <div className="relative z-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mt-[48px] sm:mt-[58px] md:mt-[68px]">
                            Contact
                        </h2>
                        <div className="flex justify-center mt-2">
                            <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-blue-500"></div>
                        </div>
                        <h1 className="mt-6 text-lg font-normal opacity-80 text-center">Let’s connect to build dynamic, user-friendly web applications tailored to your needs!</h1>
                    </div>


                </div>

                <div className="flex  justify-center mt-12  ">
                    {
                        contactIcon.map((contact) => (
                            <Link key={contact.name} to={contact.link}>
                                <div className="bg-[#f5f7ff] rounded-2xl p-6 m-2 inline-flex items-center justify-center transition-all duration-200 shadow-social hover:shadow-social-hover hover:-translate-y-2 cursor-pointer">
                                    <img src={contact.image} alt={'a'} className="w-12 h-12 object-contain" />
                                </div>
                            </Link>


                        ))
                    }
                </div>

            </div>


        </div>
    );
};

export default ContactHome;