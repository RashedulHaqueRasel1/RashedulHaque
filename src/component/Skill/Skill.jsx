const skills = [
    { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
    { name: "TypeScript", logo: "https://i.postimg.cc/bv1mYkHn/image.png" },
    { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Express.js", logo: "https://i.postimg.cc/s2wCQm94/express1.png" },
    { name: "MongoDB", logo: "https://i.postimg.cc/dt6xs3qz/mongodb-removebg-preview.png" },
    { name: "Firebase", logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
    { name: "HTML", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
    { name: "Daisy Ui", logo: "https://i.postimg.cc/QdC7g36w/Daisy-UI.png" },
    { name: "Tailwind Flex", logo: "https://i.postimg.cc/2ykzhndY/tailwindflex.png" },
    { name: "Flowbite", logo: "https://i.postimg.cc/4d4M1P0W/flowbite-removebg-preview.png" },
    { name: "Mui", logo: "https://i.postimg.cc/g2YTpNzm/mui-removebg-preview.png" },
    { name: "Figma", logo: "https://i.postimg.cc/43VnRj4s/figma.png" },
    { name: "NPM", logo: "https://eg2.gallerycdn.vsassets.io/extensions/eg2/vscode-npm-script/0.3.29/1664880784428/Microsoft.VisualStudio.Services.Icons.Default" },
    { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
    { name: "Vercel", logo: "https://i.postimg.cc/7hstNtQq/vercel-removebg-preview.png" },
];

const Skill = () => {
    return (
        <div className="mt-20 mx-auto container">
            <div className="relative flex justify-center">
                {/* Background Text */}
                <h1 className="absolute inset-0 flex justify-center mt-10  text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-blue-500 opacity-15">
                    What I Do
                </h1>

                {/* Foreground Text */}
                <div className="relative z-10">
                    <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black opacity-70 text-center mt-[48px] sm:mt-[60px] md:mt-[70px]">
                        Technology
                    </h2>
                    <div className="flex justify-center mt-2">
                        <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-blue-500"></div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 mt-8 ">
                {skills.map(skill => (
                    <div
                        key={skill.name}
                        
                        className="flex flex-col justify-center items-center p-4  border shadow-md rounded-lg transition duration-700 ease-in-out hover:shadow-lg hover:-translate-y-1 h-48 hover:bg-blue-200 hover:cursor-pointer "
                    >
                        <img src={skill.logo} alt={skill.name} className="w-20 h-20" />

                        <p className="text-xl font-bold mt-4">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;