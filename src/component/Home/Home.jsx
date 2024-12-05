// import Banner from "../Banner/Banner";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navbar";
import AboutHome from "./AboutHome/AboutHome";
import Banner from "./Banner/Banner";
import MarqueeSlide from "./MarqueeSlide/MarqueeSlide";
import ProjectHome from "./ProjectHome/ProjectHome";

const Home = () => {

    return (
        <div>

            {/* Home */}
            <Navbar></Navbar>

            {/* Blur Image: Move to End */}
            <div className="absolute top-0 right-10">
                <img
                    src="https://i.postimg.cc/yY7Bb1YT/blur-1.png"
                    alt=""
                    className=" "
                />
            </div>

            <Banner></Banner>

            <MarqueeSlide></MarqueeSlide>

            <AboutHome></AboutHome>


            <ProjectHome></ProjectHome>



            {/* <Footer></Footer> */}


        </div>
    );
};

export default Home;