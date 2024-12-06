import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";


const Footer = () => {
    return (

        <footer className="bg-blue-500 md:flex md:items-center md:justify-between    md:p-6 xl:p-8    ">

            <div className="text-white text-center my-4 lg:my-0 ">
                <Link to={''} className=""><h1><span className="hover:underline">@Rashedul Haque Rasel </span>{new Date().getFullYear()} </h1></Link>
            </div>

            <div className="flex justify-center  space-x-6">
                <Link to={"https://www.facebook.com/Rashedul.haque.Rase1/"} className="mb-4 text-white hover:text-gray-900">
                    <IoLogoFacebook className="h-7 w-7" />
                </Link>
                <Link to={"https://www.instagram.com/rase1ahamed/"} className="mb-4 text-white hover:text-gray-900">
                    <AiFillInstagram className="h-7 w-7" />
                </Link>

                <Link to={"https://x.com/Rashedul_Rasel1"} className="text-white hover:text-gray-900">
                    <IoLogoTwitter className="h-7 w-7" />
                </Link>

                <Link to={"https://www.youtube.com/@RashedulHaqueRasel1"} className="text-white hover:text-gray-900">
                    <IoLogoYoutube className="h-7 w-7" />
                </Link>
            </div>
        </footer>

    );
};

export default Footer;