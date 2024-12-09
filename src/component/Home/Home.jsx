 
import AboutHome from "./AboutHome/AboutHome";
import Banner from "./Banner/Banner";
import ContactHome from "./ContactHome/ContactHome";
import MarqueeSlide from "./MarqueeSlide/MarqueeSlide";
import ProjectHome from "./ProjectHome/ProjectHome";
import SkillHome from "./SkillHome/SkillHome";

const Home = () => {

    return (
        <div>
 

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

            <SkillHome></SkillHome>


            <ProjectHome></ProjectHome>
            
            <ContactHome></ContactHome>


 


        </div>
    );
};

export default Home;