import { useState } from "react";
// import { Link } from "react-router-dom";

// Project Data
const projects = [
    {
        title: "Giftap",
        description:
            "Giftap simplifies gifting with scheduling, secure payments, order tracking, and user-friendly dashboards for buyers, sellers, and admins.",
        technologies: ["React JS", "Node.js", "Express.js", "MongoDB", "Socket.io"],
        image: "https://i.postimg.cc/gJ2G6yqW/image.png",
        liveLink: "https://giftap901.web.app/",
        clientCode: "https://github.com/Naiemjoy1/giftap_client",
        serverCode: "https://github.com/Naiemjoy1/giftap_server/",
        credentials: [
            { role: "Admin", email: "giftap@admin.com", password: "giftap1Admin" },
            { role: "Seller", email: "seller@gmail.com", password: "giftap1Seller" },
        ],
    },
    {
        title: "Laptop Gallery",
        description:
            "Laptop Gallery a user-friendly platform offering laptops, mobiles, accessories, and customizable UI/UX designs for seamless browsing and selection.",
        technologies: ["React JS", "Node.js", "Express.js", "MongoDB", "SSLComarcz"],
        image: "https://i.postimg.cc/xCxMbqFf/image.png",
        liveLink: "https://laptop-gallery.netlify.app/",
        clientCode: "https://github.com/mohammad-salim-23/LaptopGallery",
        serverCode: "https://github.com/mohammad-salim-23/LaptopGalleryServer",
        credentials: [
            { role: "Admin", email: "admin@laptopgallery.com", password: "ADMIN123456" },
        ],
    }
    ,
    {
        title: "Love Link Matrimony",
        description:
            "An online matrimony platform offering profile filters, success stories, and dashboards for managing profiles and finding life partners.",
        technologies: ["React JS", "Node.js", "Express.js", "MongoDB", "Stripe"],
        image: "https://i.postimg.cc/505g29cH/image.png",
        liveLink: "https://love-link-client.vercel.app/",
        clientCode: "https://github.com/RashedulHaqueRasel1/Love-Link",
        serverCode: "https://github.com/RashedulHaqueRasel1/Love-Link-Server",
        credentials: [
            { role: "Admin", email: "admin@gmail.com", password: "Admin@1" },
            { role: "Premium Member", email: "premium@gmail.com", password: "Premium@1" },
        ],
    }
];

const ProjectHome = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenGit, setIsOpenGit] = useState(false);

    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsOpen(true);
    };
    const closeModal = () => setIsOpen(false);

    const openModalGit = (project) => {
        setSelectedProject(project);
        setIsOpenGit(true);
    };
    const closeModalGit = () => setIsOpenGit(false);



    return (
        <div className="">

            <div className="bg-[#D7F2F9]  mt-20 h-full  bg-cover bg-center  ">
                <div>
                    <div className="relative flex justify-center">
                        {/* Background Text */}
                        <h1 className="absolute inset-0 flex justify-center mt-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-700 opacity-10">
                            My Work
                        </h1>
                        {/*  Text */}
                        <div className="relative z-10">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mt-[48px] sm:mt-[58px] md:mt-[68px]">
                                Projects
                            </h2>
                            <div className="flex justify-center mt-2">
                                <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-blue-500"></div>
                            </div>
                        </div>
                    </div>

                    {/* Project Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-8 mx-auto container ">
                        {projects.map((project, index) => (
                            <div key={index} className="p-4">
                                <div className="border border-black p-2 rounded-lg bg-white">
                                    <div className="relative overflow-hidden group cursor-pointer">
                                        {/* Image */}
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-80 object-cover mb-2 transition-transform duration-700 ease-in-out group-hover:scale-105 rounded-lg"
                                        />
                                    </div>

                                    <div className="flex flex-wrap justify-center gap-2 text-sm mb-2 mt-2">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="border border-black p-2 text-black rounded-xl hover:bg-blue-500"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div>
                                        <h1 className="text-3xl   font-bold text-black text-center">
                                            {project.title}
                                        </h1>
                                        <p className="text-black text-opacity-65 text-center leading-relaxed mt-1">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex justify-around my-3">
                                        <button
                                            className="px-4 py-2 md:px-6 md:py-3 lg:px-5 lg:py-3 hover:border border border-black text-[12px] md:text-[14px] lg:text-[16px] font-bold rounded-lg bg-blue-500 hover:bg-transparent text-black transition duration-1000 ease-in-out flex justify-center items-center"
                                            onClick={() => openModal(project)}
                                        >
                                            Demo
                                        </button>
                                        <button
                                            className="px-4 py-2 md:px-6 md:py-3 lg:px-5 lg:py-3 hover:border border border-black text-[12px] md:text-[14px] lg:text-[16px] font-bold rounded-lg bg-blue-500 hover:bg-transparent text-black transition duration-1000 ease-in-out flex justify-center items-center"
                                            onClick={() => openModalGit(project)}
                                        >
                                            GitHub
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Modals */}
                    {isOpen && selectedProject && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                            <div className="bg-white rounded-lg shadow-lg w-96">
                                <div className="p-4 border-b">
                                    <h2 className="text-lg text-gray-700 text-center font-bold">Project Key</h2>
                                </div>
                                <div className="p-4">
                                    {selectedProject.credentials?.map((cred, i) => (
                                        <div key={i} className="mb-4">
                                            <h1 className="font-semibold">{cred.role}</h1>
                                            <p className="font-semibold">
                                                Email:{" "}
                                                <span className="font-normal hover:underline hover:text-blue-500">
                                                    {cred.email}
                                                </span>
                                            </p>
                                            <p className="font-semibold">
                                                Password:{" "}
                                                <span className="font-normal hover:underline hover:text-blue-500">
                                                    {cred.password}
                                                </span>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between p-4 border-t">
                                    <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                                        <button className="px-4 py-2 md:px-6 md:py-3 lg:px-5 lg:py-3 hover:border border text-[12px] md:text-[14px] lg:text-[16px] font-bold rounded-lg bg-blue-500 hover:bg-transparent text-black transition duration-1000 ease-in-out flex justify-center items-center hover:text-black">
                                            Live Link
                                        </button>
                                    </a>
                                    <button
                                        onClick={closeModal}
                                        className="px-4 py-2 text-black bg-red-500 rounded hover:bg-red-600"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {isOpenGit && selectedProject && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                            <div className="bg-white rounded-lg shadow-lg w-96">
                                <div className="p-4 border-b">
                                    <h2 className="text-lg text-gray-700 text-center font-bold">Project Code</h2>
                                </div>
                                <div className="flex justify-evenly my-4">
                                    <a
                                        href={selectedProject.clientCode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 md:px-6 md:py-3 lg:px-5 lg:py-3 hover:border border text-[12px] md:text-[14px] lg:text-[16px] font-bold rounded-lg bg-blue-500 hover:bg-transparent text-black transition duration-1000 ease-in-out flex justify-center items-center"
                                    >
                                        Client Code
                                    </a>
                                    <a
                                        href={selectedProject.serverCode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 md:px-6 md:py-3 lg:px-5 lg:py-3 hover:border border text-[12px] md:text-[14px] lg:text-[16px] font-bold rounded-lg bg-blue-500 hover:bg-transparent text-black transition duration-1000 ease-in-out flex justify-center items-center"
                                    >
                                        Server Code
                                    </a>
                                </div>
                                <div className="flex justify-center p-4 border-t">
                                    <button
                                        onClick={closeModalGit}
                                        className="px-4 py-2 text-black bg-red-500 rounded hover:bg-red-600"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* <div className=" ">
                       
                        <Link to={''} className="relative flex justify-center">
                            <button className="absolute px-4 py-3 md:px-6 md:py-3 lg:px-8 lg:py-3 mt-3 lg:mt-4 hover:border border text-[12px] md:text-[14px] lg:text-[16px] font-bold rounded-lg bg-blue-500 hover:bg-transparent text-black hover:text-black transition duration-1000 ease-in-out flex justify-center items-center">
                                All Project ...
                            </button>
                        </Link>

                    </div> */}
                </div>



            </div>

        </div>
    );
};

export default ProjectHome;