import Marquee from "react-fast-marquee";

const skills = [
    { name: "HTML", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Firebase", logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
    { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Express.js", logo: "https://i.postimg.cc/s2wCQm94/express1.png" },
    { name: "MongoDB", logo: "https://i.postimg.cc/dt6xs3qz/mongodb-removebg-preview.png" },
    { name: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
    { name: "TypeScript", logo: "https://i.postimg.cc/bv1mYkHn/image.png" },
    { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
    { name: "Vercel", logo: "https://i.postimg.cc/7hstNtQq/vercel-removebg-preview.png" },
];

const MarqueeSlide = () => {
    return (
        <div className="relative mt-10  lg:mt-40 ">
            {/* Fade Effect at Start */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>

            {/* Fade Effect at End */}
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>


            {/* Marquee */}
            <Marquee className="cursor-pointer" pauseOnHover={true}>
                <div className="flex gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-4 bg-blue-100 shadow-md rounded-lg transition-transform duration-100 ease-in-out hover:shadow-lg hover:-translate-y-1"
                        >
                            <img src={skill.logo} alt={skill.name} className="w-16 h-16" />
                        </div>
                    ))}
                </div>
            </Marquee>

            <div>
                test
            </div>
        </div>
    );
};

export default MarqueeSlide;
