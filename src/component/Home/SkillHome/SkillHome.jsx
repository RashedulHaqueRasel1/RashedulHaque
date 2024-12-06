

const BackendTools = [
    {
        title: ' Backend',
        name: 'Node Js',
        name1: 'Express.Js',
        name2: 'JWT',
        name3: 'JSON',
        name4: 'Nodemon',
        name5: 'Postman',


    },
    {
        title: 'Tools',
        name: 'Git',
        name1: 'GitHub',
        name2: 'Figma',
        name3: 'Axios',
        name4: 'Vercel',
        name5: 'SSLCommerz',


    },


];

const Frontend = [
    {
        title: '</> Frontend',
        HTML: 'HTML',
        CSS: 'CSS',
        Tailwind_CSS: 'Tailwind CSS',
        Javascript: 'Javascript',
        TypeScript: 'TypeScript',
        React: 'React',
        NextJS: 'Next JS',
        Firebase: 'Firebase',
        Redux: 'Redux',


    },
];
const DataBase = [
    {
        title: 'Database',
        name: 'MongoDB',
        name1: 'Mongoose',
        name2: 'SQL',
    },
];


const SkillHome = () => {
    return (
        <div className="   ">


            <div className='mx-auto container  '>

                <div className="relative flex justify-center">
                    {/* Background Text */}
                    <h1 className="absolute inset-0 flex justify-center mt-10  text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-blue-500 opacity-15">
                        What I Do
                    </h1>

                    {/* Foreground Text */}
                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black opacity-70 text-center mt-[48px] sm:mt-[60px] md:mt-[70px]">
                            Skills
                        </h2>
                        <div className="flex justify-center mt-2">
                            <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-blue-500"></div>
                        </div>
                    </div>
                </div>

                <div className="  mt-20">
                    <div className=' flex justify-center  '>
                        <div className=' grid grid-cols-1  lg:gap-20 w-[550px] p-4 md:p-0 lg:p-0 hover:scale-105 duration-500'>
                            {Frontend.map((section) => (
                                <div key={section.title} className="bg-[#D7F2F9] rounded-lg shadow-lg p-6 mb-8  ">
                                    <h1 className='text-center font-bold text-2xl'>{section.title}</h1>
                                    <div className='grid grid-cols-2 md:grid-cols-3 mt-4 '>
                                        <li className=" text-black">{section.HTML}</li>
                                        <li className=" text-black">{section.CSS}</li>
                                        <li className=" text-black">{section.Tailwind_CSS}</li>
                                        <li className=" text-black">{section.Javascript}</li>
                                        <li className=" text-black text-opacity-80">{section.TypeScript}</li>
                                        <li className=" text-black text-opacity-80">{section.React}</li>
                                        <li className=" text-black text-opacity-80">{section.NextJS}</li>
                                        <li className=" text-black text-opacity-80">{section.Firebase}</li>
                                        <li className=" text-black text-opacity-80">{section.Redux}</li>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <div className="  mt-2">
                    <div className=' flex justify-center  '>
                        <div className=' grid grid-cols-1 md:grid-cols-2  lg:gap-20 w-[900px] p-4 md:p-0 lg:p-0'>
                            {BackendTools.map((section) => (
                                <div key={section.title} className="bg-[#D7F2F9] rounded-lg shadow-lg p-6 mb-8  hover:scale-105 duration-500 ">
                                    <h1 className='text-center font-bold text-xl'>{section.title}</h1>
                                    <div className='grid grid-cols-2 md:grid-cols-3 mt-4 '>
                                        <li className=" text-black">{section.name}</li>
                                        <li className=" text-black">{section.name1}</li>
                                        <li className=" text-black">{section.name2}</li>
                                        <li className=" text-black">{section.name3}</li>
                                        <li className=" text-black">{section.name4}</li>
                                        <li className=" text-black ">{section.name5}</li>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <div className="  mt-2">
                    <div className=' flex justify-center  '>
                        <div className=' grid grid-cols-1  lg:gap-20  w-[550px] p-4 md:p-0 lg:p-0 hover:scale-105 duration-500'>
                            {DataBase.map((section) => (
                                <div key={section.title} className="bg-[#D7F2F9] rounded-lg shadow-lg p-6   ">
                                    <h1 className='text-center font-bold text-xl'>{section.title}</h1>
                                    <div className='grid grid-cols-2 md:grid-cols-3 mt-4 '>
                                        <li className=" text-black">{section.name}</li>
                                        <li className=" text-black">{section.name1}</li>
                                        <li className=" text-black">{section.name2}</li>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default SkillHome;